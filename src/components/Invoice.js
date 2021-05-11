import React, { Component } from 'react';
import axios from 'axios';
import Task from './Task';

class Invoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            invoiceId: "",
            amount: null,
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        const link = `http://localhost:4000/invoices/${id}`;
        axios.get(link)
            .then(res => {
                console.log(res.data);
                this.setState({
                    invoiceId: res.data.invoiceId,
                    amount: res.data.amount
                });
            })
    }
    render() {
        return (
            <div className="Invoice">
                <h1>Invoice</h1>
                <h3>Invoice #{this.state.invoiceId}</h3>
                <br />
                Amount: {this.state.amount}
                <br />
                Hours: 16
                <br />
                <br />
                <Task description="Draft Site"
                    hours={8} />
                <Task description="Draft basement level"
                    hours={3} />
                <Task description="Draft main level"
                    hours={5} />
                <br />
                <button>Export to PDF</button>
            </div>
        );
    }
}

export default Invoice;