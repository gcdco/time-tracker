import React, { Component } from 'react';
import AddTask from './AddTask';
import axios from 'axios';
import '../css/Project.css';
//import { v4 as uuidv4 } from 'uuid';
import Task from './Task';
import '../css/Project.css';
const port = 4000;

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: [],
            tasks: []
        }
        this.calculateHours = this.calculateHours.bind(this);
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        const link = `http://localhost:${port}/task/${id}`;
        axios.get(link)
            .then(res => {
                console.log(res.data);
                this.setState({
                    project: res.data.project,
                    tasks: res.data.tasks
                });

            })
    }
    calculateHours() {
        let hours = this.state.tasks.reduce((total, current) => total + current.time_duration, 0);
        return hours;
    }
    render() {
        let tasks = this.state.tasks.map(task => {
            return <Task
                key={task.task_id}
                description={task.description}
                hours={task.time_duration}
                id={task.task_id} />
        });
        const projectTitle = this.state.project.title;
        const hours = this.calculateHours();
        return (
            <div className="Project">
                <div className="Project-header">
                    <h1>{projectTitle}</h1>
                    <h2>Hours: {hours}</h2>
                </div>
                <div className="Project-Addtask">
                    <AddTask project_id={this.state.project.project_id} />
                </div>
                <div className="Project-Tasklist">
                    {tasks}
                </div>
            </div>

        );
    }
}

export default Project;