import React from 'react';

function ProblemHeader({ number, description }) {
    return (
        <div className="problem-header">
            <div className="problem-num">{number}</div>
            <div className="problem-description">{description}</div>
        </div>
    );
}

export default ProblemHeader;