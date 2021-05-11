import React, { Component } from 'react';
import axios from 'axios';

import Project from './Project';
import '../css/ProjectList.css';

class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = { projects: [] }
    }
    componentDidMount() {
        axios.get(`http://localhost:4000/projects`)
            .then(res => {
                console.log(res);
                this.setState({ projects: res.data });
                //const persons = res.data;
                console.log(this.state.projects);
            })
    }
    render() {
        let p = this.state.projects.map((proj) => {
            let link = `http://localhost:3000/projects/${proj.id}`;
            return <li><a href={link}>{proj.name}</a></li>
        });

        return (
            <div className='ProjectList'>
                <h1>Projects</h1>
                <ul className='ProjectList-ul'>
                    {p}
                </ul>
            </div>
        );
    }
}

export default ProjectList;