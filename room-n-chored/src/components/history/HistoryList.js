import React from 'react';
import HistorySummary from './HistorySummary';
import UserCard from '../chores/UserCard';

const HistoryList = ({chores, user}) => {
    return (
        <div>
            <div className="chore-list section">
                <UserCard user={user}/>
                { chores && chores.map(chore => {
                    return (
                        <HistorySummary chore={chore} key={chore.id} user={user}/>
                    )
                })}
            </div>
        </div>
    )
}

export default HistoryList;