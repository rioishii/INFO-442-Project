import React from 'react';

const ChoreSummary = ({chore}) => {
    return (
        <div className="card z-depth chore-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{chore.title}</span>
                <p>Posted by Rio Ishii</p>
                <p className="grey-text">3rd September, 2am</p>
            </div>
        </div>
    )
}

export default ChoreSummary