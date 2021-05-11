import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import "../css/NavBar.css"

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <nav className="Navbar">
                {/* <NavLink exact to="/"
                    activeClassName="NavBar-active">
                    Home
                </NavLink> */}
                <NavLink exact to="/projects"
                    activeClassName="NavBar-active">
                    Projects
                </NavLink>
                <NavLink exact to="/addtask"
                    activeClassName="NavBar-active">
                    Add Task
                </NavLink>
                <NavLink exact to="/invoices"
                    activeClassName="NavBar-active">
                    Invoices
                </NavLink>
                <NavLink exact to="/newproject"
                    activeClassName="NavBar-active">
                    New Project
                </NavLink>
                <NavLink exact to="/export"
                    activeClassName="NavBar-active">
                    Export
                </NavLink>
            </nav>
        );
    }
}

export default NavBar;