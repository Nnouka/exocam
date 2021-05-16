import React from 'react';
import { appName } from '../../../constants';
import './work-step.css';

function WorkStep({order = 0, title = "", renderIcon, text, ...props}) {
    return (
    <div className="work-step">
        <div>
            {renderIcon && renderIcon()}
        </div> 
        <div><h4>{order}. {title}</h4>
            <p>
                {text}
            </p>
        </div>
    </div>);
}

export default WorkStep;