import React, { Component } from 'react';
import Page from './Page';
import Navbar from './Navbar';

class Theme extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 'contact'
        }
        this.handleChange = this.handleChange.bind( this );
    }

    handleChange(page) {
        this.setState({
            currentPage: page
        });
    }

    render(){
        return(
            <div>
                <Navbar currentPage={this.state.currentPage} brand={this.props.brand} change={this.handleChange} />
                <Page currentPage={this.state.currentPage} />
            </div>
        );
    }
}

Theme.defaultProps = {
    brand:'ReactStrap',
    heading:'Hello, world!',
    text:'This is a Bootstrap theme that uses React.js components'
}

export default Theme;