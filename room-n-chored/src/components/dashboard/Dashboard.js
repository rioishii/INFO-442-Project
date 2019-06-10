import React, { Component } from 'react';
import ChoreList from '../chores/ChoreList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import { getFirestore } from 'redux-firestore';

class Dashboard extends Component {
    render() {
        const { chores, users, auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        let userAndChores = [];

        if (users && users.forEach(user => {
            userAndChores.push(
                // "key" was put in here to put away warnings in Google Chrome console
                <div className="col s4" key={user.id}> 
                    <ChoreList chores={chores} user={user} auth={auth}/>
                </div>
            )
        }));
        return (
            <div>
                <Navbar />
                <div className="dashboard container">
                    <div className="row">
                        {userAndChores}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.firestore.ordered.users,
        chores: state.firestore.ordered.chores,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'users', orderBy: ['choreCount', 'desc'] }
    ]),
    firestoreConnect([
        {collection: 'chores', orderBy: ['createdAt', 'desc']}
    ])
)(Dashboard)