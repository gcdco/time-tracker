import React, { Component } from 'react';
import axios from 'axios';

import '../css/AddTask.css';


class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = { projects: [] }
        this.postTask = this.postTask.bind(this);
    }
    componentDidMount() {
        axios.get(`http://localhost:4000/projects`)
            .then(res => {
                this.setState({ projects: res.data });
                //const persons = res.data;
                console.log(this.state.projects);
            });
    }
    postTask() {
        const url = `http:localhost:4000/projects`;
        const projectId = Math.floor((Math.random() * 1000) + 1);
        axios.post(url, {
            projectId: projectId,
            name: 'Fred',
            tasks: []
        })
            .then(function (response) {
                console.log(response);
            })
    }

    render() {
        const projects = this.state.projects.map(proj => {
            return <option value={proj.projectId}>{proj.name}</option>
        });
        return (
            <div className="AddTask">
                <h1>Add A Task</h1>
                <form action="http://localhost:4000/projects" method="POST">
                    <label for="project-name">Project Name: </label>
                    <select name="project-name" id="project-name">
                        {projects}
                    </select>
                    <br />

                    <label for="hours">Hours: </label>
                    <input type="text" name="hours" id="hours" />
                    <br />

                    <label for="description">Description: </label>
                    <input type="text" name="description" id="description" />
                    <br />
                    <input type="submit" value="Submit" />
                    <button>Cancel</button>
                </form>
            </div>
        );
    }
}

export default AddTask;