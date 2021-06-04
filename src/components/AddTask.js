import React, { Component } from 'react';
import axios from 'axios';

import '../css/AddTask.css';
const port = 4000;


class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = { description: "", time: 0 }
        this.postTask = this.postTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        console.log("add task mounted")
    }
    postTask() {
        const url = `http://localhost:${port}/task/add/${this.props.project_id}`;
        axios.post(url, {
            project_id: this.props.project_id,
            time: this.state.time,
            description: this.state.description
        })
            .then(function (response) {
                console.log(response);
            })
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        let { time, description } = this.state;

        return (
            <div className="AddTask">
                <form>
                    <h1>Add A Task</h1>
                    <div className="AddTask-input-container">

                        <label htmlFor="time">Time: </label>
                        <input type="text" name="time" id="time" value={time} onChange={this.handleChange} />
                        <br />
                        <label htmlFor="description">Description: </label>
                        <input type="text" name="description" id="description" value={description} onChange={this.handleChange} />
                    </div>
                    <button onClick={this.postTask}>Submit</button>
                    <button>Cancel</button>
                </form>
            </div >
        );
    }
}

export default AddTask;