import React, { Component } from 'react';
import Button from '../child/Button.js';
import '../child/Button.css'; 

const buttonClassName = 'ezButton btnMed';

class FlexRowButton extends Component {
    render() {
        return (
            <div className="ezFlexRow">
                {
                    this.props.children.map((child, i) => (
                        <Button 
                            className={buttonClassName}
                            text={child.text}
                            href={child.href} 
                        />
                    ))
                }
            </div>
        );
    }
}

export default FlexRowButton;
