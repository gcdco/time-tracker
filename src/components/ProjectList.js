import React, { Component } from 'react';
import axios from 'axios';

import Project from './Project';
import NewProject from './NewProject';
import '../css/ProjectList.css';

class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = { projects: [] };
    }
    componentDidMount() {
        axios.get(`http://localhost:4000/project/`)
            .then(res => {
                console.log(res);
                this.setState({ projects: res.data });
                console.log(this.state.projects);
            });
    }
    render() {
        let p = this.state.projects.map((proj) => {
            let link = `http://localhost:3000/projects/${proj.project_id}`;
            return <li key={proj.project_id}><a href={link}>{proj.title}</a></li>;
        });

        return (
            <div className='ProjectList'>
                <h1>Projects</h1>
                <NewProject />
                <ul className='ProjectList-ul'>
                    {p}
                </ul>
            </div>
        );
    }
}

export default ProjectList;