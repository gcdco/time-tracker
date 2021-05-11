import React, { Component } from 'react';
import axios from 'axios';
//import { v4 as uuidv4 } from 'uuid';

import Task from './Task';
import '../css/Project.css';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            projectId: null,
            tasks: []
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        const link = `http://localhost:4000/projects/${id}`;
        axios.get(link)
            .then(res => {
                console.log(res.data);
                this.setState({
                    name: res.data.name,
                    projectId: res.data.projectId,
                    tasks: res.data.tasks
                });

            })
    }
    render() {
        let tasks = this.state.tasks.map(task => {
            return <Task description={task.description} hours={task.hours} id={task.id} />
        });
        //arrayOfObjects.reduce(function, initial value)
        let hours = this.state.tasks.reduce((total, current) => total + current.hours, 0);
        return (
            <div className="Project">
                <h1>{this.state.name}</h1>
                <h2>Hours: {hours}</h2>
                {tasks}
            </div>

        );
    }
}

export default Project;