import React from 'react';
import './work-step.css';
function WorkStep({order = 0, ...props}) {
    return (
    <div className="work-step">
        <div></div> <div>{order}. Work step</div>
    </div>);
}

export default WorkStep;