import React, { Component } from 'react';
import Client from './Client';
import axios from 'axios';

class ClientList extends Component {
    constructor(props) {
        super(props);
        this.state = { clients: [] }
    }
    componentDidMount() {
        axios.get(`http://localhost:4000/clients`)
            .then(res => {
                console.log(res);
                this.setState({ clients: res.data });
                //const persons = res.data;
                console.log(this.state.clients);
            })
    }
    render() {
        let clients = this.state.clients.map(client => {
            let link = `http://localhost:3000/clients/${client.id}`;
            return <li><a href={link}>{`${client.businessName}`}</a></li>
        });
        return (
            <div className="ClientList">
                <h1>Clients</h1>
                <ul>
                    {clients}
                </ul>
            </div>
        );
    }
}

export default ClientList;