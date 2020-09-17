import React, { Component } from 'react';
import './Button.css'; 
import './Link.css';

import Link from './Link.js';

const buttonClassName = 'ezButton btnMed ';

class Button extends Component {
    render() {
        let highlightClassName = this.props.highlight ? 'highlight' : 'no-highlight';
        return (
            <div className={buttonClassName + highlightClassName}>
                <Link 
                    href={this.props.href}
                    text={this.props.text}
                />
            </div>
        );
    }
}

export default Button;
