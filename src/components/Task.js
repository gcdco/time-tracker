import React, { Component } from 'react';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="Task">
                <strong>{this.props.description}</strong>....{this.props.hours} Hours

            </div >
        );
    }
}

export default Task;