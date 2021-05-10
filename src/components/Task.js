import React, { Component } from 'react';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="Task">
                <p>{this.props.description}</p>
                <p><strong>{this.props.hours} Hours</strong></p>
            </div>
        );
    }
}

export default Task;