import React, { Component } from 'react';
import axios from 'axios';

import Invoice from './Invoice';

class InvoiceList extends Component {
    constructor(props) {
        super(props);
        this.state = { invoices: [] }
    }
    componentDidMount() {
        axios.get(`http://localhost:4000/invoices`)
            .then(res => {
                console.log(res);
                this.setState({ invoices: res.data });
                //const persons = res.data;
                console.log(this.state.invoices);
            })
    }
    render() {
        let invoices = this.state.invoices.map((invoices) => {
            let link = `http://localhost:3000/invoices/${invoices.id}`;
            return <li><a href={link}>Invoice #{invoices.invoiceId}</a>..{invoices.amount}</li>
        });
        return (
            <div className='InvoiceList'>
                <h1>Invoice List</h1>
                <ul className='InvoiceList-ul'>
                    {invoices}
                </ul>
            </div>
        );
    }
}

export default InvoiceList;