import React, { Component } from 'react';
import axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const port = 4000;

class NewProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: [],
            addClient: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/client/`)
            .then(res => {
                console.log(res);
                this.setState({
                    clients: res.data,
                    client: res.data[0].client_id,
                    desc: "",
                    title: ""
                });
                //const persons = res.data;
                console.log(this.state.clients);
            })
    }
    handleChange(e) {
        console.log(e);
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit() {
        const url = `http://localhost:${port}/task/add/${this.props.project_id}`;
        axios.post(url, {
            title: this.props.project_id,
            client: this.state.time,
            desc: this.state.description
        })
            .then(function (response) {
                console.log(response);
            })
    }
    render() {
        const clients = this.state.clients.map((client) => {
            return (<MenuItem
                key={client.client_id}
                value={client.client_id}>{client.title}</MenuItem>)
        });
        return (
            <div className="NewProject">
                <h1>
                    Add Project
                </h1>
                <form action="/project/add" method="POST">
                    {/* <label htmlFor="title">Title: </label> */}
                    <TextField id="standard-basic" label="title" name="title" onChange={this.handleChange} />
                    <br /> <br />
                    <InputLabel id="demo-simple-select-label">Clients</InputLabel>
                    <FormControl className="select">
                        {/* <InputLabel id="demo-simple-select-label">Clients</InputLabel> */}
                        <Select
                            labelId="demo-simple-select-label"
                            id="client"
                            name="client"
                            value={this.state.client}
                            onChange={this.handleChange}
                        >
                            {clients}
                        </Select>
                    </FormControl>
                    <br />
                    {/* <label htmlFor="desc">Description: </label> */}
                    <TextField id="standard-basic" label="description" name="desc" onChange={this.handleChange} />
                    {/* <input type="text" name="desc" id="desc" /> */}
                    <br /><br />
                    <Button variant="contained" type="submit" name="submit" id="submit" onClick={this.handleSubmit} >Submit</Button>
                    {/* <input type="submit" name="submit" id="submit" /> */}
                </form>
            </div>
        );
    }
}

export default NewProject;