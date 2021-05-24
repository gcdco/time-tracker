import React, { Component } from 'react';
import axios from 'axios';

class Client extends Component {
    constructor(props) {
        super(props);
        this.state = {
            businessName: "",
            clientID: null,
            contactName: "",
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        const link = `http://localhost:4000/clients/${id}`;
        axios.get(link)
            .then(res => {
                console.log(res.data);
                this.setState({
                    businessName: res.data.businessName,
                    contactName: res.data.clientContactName,
                    clientID: res.data.clientID
                });
            })
    }
    render() {
        return (
            <div className="Client">
                <h1>{this.state.businessName}</h1>
                <h3>{this.state.contactName}</h3>
            </div>
        );
    }
}

export default Client;