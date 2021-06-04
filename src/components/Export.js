import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class Export extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleExport = this.handleExport.bind(this);
    }
    handleExport() {
        console.log("Export");
    }
    render() {
        return (
            <div>
                <h1>Export</h1>
                <div className="invoice-email">
                    <p>Press the button below to export your data. The data is exported to a csv file.</p>
                    <Button variant="contained" onClick={this.handleExport} name="export" id="export" >Export</Button>
                </div>
            </div>
        );
    }
}

export default Export;