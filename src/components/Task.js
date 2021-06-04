import React, { Component } from 'react';
import axios from 'axios';
import "../css/Task.css";
const port = 4000;

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: this.props.description,
            minutes: this.props.minutes,
            edit: false
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleEdit() {
        const canEdit = !this.state.edit;
        this.setState({
            edit: canEdit
        });
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit() {
        const url = `http://localhost:${port}/task/update/${this.props.id}`;
        axios.post(url, {
            project_id: this.props.project_id,
            time: this.state.minutes,
            description: this.state.description
        }).then(function (response) {
            console.log(response);
        })
        const canEdit = !this.state.edit;
        this.setState({
            edit: canEdit
        });
    }
    handleDelete() {
        const url = `http://localhost:${port}/task/delete/${this.props.id}`;
        axios.post(url).then(function (response) {
            console.log(response);
        });
    }
    render() {
        const { edit } = this.state;
        return (
            <div className="Task">
                <input
                    className="description"
                    type="text"
                    value={this.state.description}
                    name="description"
                    disabled={!edit}
                    onChange={this.handleChange}
                />
                <input
                    className="minutes"
                    type="text"
                    value={this.state.minutes}
                    name="minutes"
                    disabled={!edit}
                    onChange={this.handleChange}
                />
                <span><strong>minutes</strong></span>
                <button onClick={this.handleEdit}>edit</button>
                {!edit && <button onClick={this.handleDelete}>delete</button>}

                { edit && <button onClick={this.handleSubmit}>submit</button>}

            </div >
        );
    }
}

export default Task;