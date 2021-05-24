import React, { Component } from 'react';
import axios from 'axios';

import '../css/AddTask.css';
const port = 4000;


class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = { projects: [] }
        this.postTask = this.postTask.bind(this);
    }
    componentDidMount() {
        axios.get(`http://localhost:${port}/project`)
            .then(res => {
                this.setState({ projects: res.data });
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
            return <option key={proj.project_id} value={proj.project_id}>{proj.title}</option>
        });
        return (
            <div className="AddTask">
                <h1>Add A Task</h1>
                <form action={`http://localhost:${port}/task/${this.props.project_id}/add`} method="POST">
                    <label htmlFor="time">Time: </label>
                    <input type="text" name="time" id="time" />
                    <br />
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="desc" id="description" />
                    <br />
                    <input type="submit" value="Submit" />
                    <button>Cancel</button>
                </form>
            </div >
        );
    }
}

export default AddTask;