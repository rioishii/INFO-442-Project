import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import HistoryList from './HistoryList';
import { NavLink } from 'react-router-dom';
import { getFirestore } from 'redux-firestore';

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houseName: ''
        }
    }
    render() {
        // console.log(this.props);
        const { chores, users, auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        let userAndChores = [];

        const firestore = getFirestore()
        firestore.collection('users').doc(auth.uid).get()
            .then(snapshot => {
                this.setState({
                    houseName: snapshot.data().houseName
                });
            });

        if (users && users.forEach(user => {
            if (user.houseName === this.state.houseName) {
                userAndChores.push(
                    // "key" was put in here to put away warnings in Google Chrome console
                    <div className="col s4" key={user.id}>
                        <HistoryList chores={chores} user={user} auth={auth} />
                    </div>
                )
            }
        }));

        return (
            <div>
                <Navbar />
                <NavLink id="backBtn" to='/'>&#8629;</NavLink>
                <div className="history container">
                    <div className="row">
                        {userAndChores}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
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
        { collection: 'chores', orderBy: ['createdAt', 'desc'] }
    ])
)(History)