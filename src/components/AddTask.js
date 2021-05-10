import React, { Component } from 'react';
import '../css/AddTask.css';


class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="AddTask">
                <h1>Add A Task</h1>
                <form>
                    <label for="project-name">Project Name: </label>
                    <select name="project-name" id="project-name">
                        <option value="1">1050 Alabama St.</option>
                        <option value="2">1245 Central St.</option>
                        <option value="3">1515 Main St.</option>
                    </select>
                    <br />

                    <label for="hours">Hours: </label>
                    <input type="text" name="hours" id="hours" />
                    <br />

                    <label for="description">Description: </label>
                    <input type="text" name="description" id="description" />
                    <br />
                    <button>Submit</button>
                    <button>Cancel</button>
                </form>
            </div>
        );
    }
}

export default AddTask;