import React, { Component } from 'react';
import Invoice from './Invoice';

class InvoiceList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='InvoiceList'>
                <h1>Invoice List</h1>
                <ul className='InvoiceList-ul'>
                    <li><Invoice number="100" /></li>
                    <li><Invoice number="101" /></li>
                    <li><Invoice number="102" /></li>
                </ul>
            </div>
        );
    }
}

export default InvoiceList;