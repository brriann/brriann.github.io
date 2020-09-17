import React, { Component } from 'react';
import Button from '../child/Button.js';
import '../child/Button.css'; 



class FlexRowButton extends Component {
    render() {
        return (
            <div className="ezFlexRow">
                {
                    this.props.children.map((child, i) => (
                        <Button
                            text={child.text}
                            href={child.href}
                            highlight={child.highlight}
                        />
                    ))
                }
            </div>
        );
    }
}

export default FlexRowButton;
