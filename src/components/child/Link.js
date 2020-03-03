import React, { Component } from 'react';
import './Link.css'; 

class Link extends Component {
    render() {
        return (
            <a className="ezLink"
                href={this.props.href}
                target="_blank"
                rel="noopener noreferrer">
                {this.props.text}
            </a>
        );
    }
}

export default Link;
