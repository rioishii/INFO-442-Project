import React from 'react';
import ChoreSummary from './ChoreSummary';

const ChoreList = ({chores}) => {
    return (
        <div className="chore-list section">
            { chores && chores.map(chore => {
                return (
                    <ChoreSummary chore={chore} key={chore.id} />
                )
            })}
        </div>
    )
}

export default ChoreList