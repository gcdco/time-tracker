import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import "../css/NavBar.css";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <nav className="Navbar">
                <NavLink exact to="/projects"
                    activeClassName="NavBar-active">
                    Projects
                </NavLink>
                <NavLink exact to="/clients"
                    activeClassName="NavBar-active">
                    Clients
                </NavLink>
                <NavLink exact to="/invoices"
                    activeClassName="NavBar-active">
                    Invoices
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