import React, { Component } from 'react';
import axios from 'axios';
import '../css/Invoice.css'
import Task from './Task';

class Invoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            rate: 30.00
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        const link = `http://localhost:4000/invoice/${id}`;
        axios.get(link)
            .then(res => {
                console.log(res.data);
                this.setState({
                    tasks: res.data.tasks,
                    client: res.data.client.title,
                    date: res.data.date.created_at
                });
                console.log(this.state.tasks);
            })
    }
    render() {
        /* <tr>
        <td>Service 1</td>
        <td className="alignright">$ 20.00</td>
        </tr> */
        const total = this.state.tasks.reduce((total, curr) => {
            let hours = curr.time_duration / 60;
            console.log(hours);
            let min = curr.time_duration % 60;
            return total + ((hours * this.state.rate) + ((min / 60) * this.state.rate))
        }, 0);
        console.log(total);
        const tasks = this.state.tasks.map((t) => {
            let hours = t.time_duration / 60;
            let min = t.time_duration % 60;
            return (
                <tr>
                    <td>{t.description}</td>
                    <td className="alignright">${(hours * this.state.rate) + ((min / 60) * this.state.rate)}</td>
                </tr>
            );
        });
        return (
            <div className="Invoice">
                <table className="body-wrap">
                    <tbody>
                        <tr>
                            <td></td>
                            <td className="container" width="600">
                                <div className="content">
                                    <table className="main" width="100%" cellPadding="0" cellSpacing="0">
                                        <tbody>
                                            <tr>
                                                <td className="content-wrap aligncenter">
                                                    <table width="100%" cellPadding="0" cellSpacing="0">
                                                        <tbody>
                                                            <tr>
                                                                <td className="content-block">
                                                                    <h2>Thank you for your business!</h2>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="content-block">
                                                                    <table className="invoice">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>{this.state.client}<br />Invoice #{this.props.match.params.id}<br />{this.state.date}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <table className="invoice-items" cellPadding="0" cellSpacing="0">
                                                                                        <tbody>
                                                                                            {tasks}
                                                                                            <tr className="total">
                                                                                                <td className="alignright" width="80%">Total</td>
                                                                                                <td className="alignright">$ {total}</td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </td>
                            <td>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Invoice;