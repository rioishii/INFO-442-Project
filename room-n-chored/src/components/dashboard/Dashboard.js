import React, { Component } from 'react';
import ChoreList from '../chores/ChoreList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        // console.log(this.props);
        const { chores, auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="dashboard container">
                <div className="row">
                    <ChoreList chores={chores} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        chores: state.firestore.ordered.chores,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'chores', orderBy: ['createdAt', 'desc'] }
    ])
)(Dashboard)