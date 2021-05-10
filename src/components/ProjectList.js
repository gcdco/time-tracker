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
        axios.get(`http://localhost:4000/get/projects`)
            .then(res => {
                this.setState({ projects: res.data });
                //const persons = res.data;
                //console.log(persons);
                console.log(this.state.projects);
            })
    }
    render() {
        let p = this.state.projects.map((proj) => {
            < Project name={proj.name} />
        });
        return (
            <div className='ProjectList'>
                {p}
                <h1>Projects</h1>
                <ul className='ProjectList-ul'>
                    <li>1515 Main St. .....20 hours</li>
                    <li>1050 Alabama St. .....24 hours</li>
                    <li>1245 Central St. .....15 hours</li>
                </ul>
                <Project />
            </div>
        );
    }
}

export default ProjectList;


{/* <li><Project name="1515 Main St." hours="20" /></li>
<li><Project name="1050 Alabama St." hours="24" /></li>
<li><Project name="1245 Central St." hours="15" /></li> */}