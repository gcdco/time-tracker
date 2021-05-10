import React, { Component } from 'react';

class Invoice extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="Invoice">
                Invoice #{this.props.number}
            </div>
        );
    }
}

export default Invoice;