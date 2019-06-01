import React from 'react';
import ChoreSummary from './ChoreSummary';
import UserCard from './UserCard';

const ChoreList = ({chores, user}) => {
    return (
        <div>
            <div className="chore-list section">
                <UserCard user={user}/>
                { chores && chores.map(chore => {
                    return (
                        <ChoreSummary chore={chore} key={chore.id} user={user}/>
                    )
                })}
            </div>
        </div>
    )
}

export default ChoreList