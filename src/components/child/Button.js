import React, { Component } from 'react';
import './Button.css'; 
import './Link.css';

import Link from './Link.js';

class Button extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <Link 
                    href={this.props.href}
                    text={this.props.text}
                />
            </div>
        );
    }
}

export default Button;
