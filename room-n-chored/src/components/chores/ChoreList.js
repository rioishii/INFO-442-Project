import React from 'react';
import ChoreSummary from './ChoreSummary';
import UserCard from './UserCard';
import { getFirestore } from 'redux-firestore';

const ChoreList = ({chores, user, auth}) => {
    const firestore = getFirestore()
    const currHouseName = firestore.collection('users').doc(auth.uid).get()
        .then(snapshot => {
            return snapshot.data().houseName === user.houseName;
        });

    return (
        <div>
            <div className="chore-list section">
                {/* comment out currHouseName === true if not working right */}
                { currHouseName === true && <UserCard user={user}/> } 
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