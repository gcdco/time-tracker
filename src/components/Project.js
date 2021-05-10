import React, { Component } from 'react';
import Task from './Task';
import '../css/Project.css';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="Project">
                <h1>1515 Main St.</h1>
                <h3><strong>Total Hours: 20</strong></h3>
                <Task description="Draw Main Level floor plan" hours={5} />
                <Task description="Draw Second Level floor plan" hours={5} />
                <Task description="Draw Basement floor plan" hours={5} />
                <Task description="Meeting with client" hours={5} />
            </div>

        );
    }
}

export default Project;