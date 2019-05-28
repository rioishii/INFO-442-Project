import React from 'react';
import moment from 'moment';

const ChoreSummary = ({chore}) => {
    return (
        <div className="card z-depth chore-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{chore.title}</span>
                <p>Posted by {chore.authorFirstName} {chore.authorLastName}</p>
                <p className="grey-text">{moment(chore.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default ChoreSummary