import React, { Component, useReducer } from 'react';
import moment from 'moment';
import { getFirestore } from 'redux-firestore';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class HistorySummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            completeModalOpen: false
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            open: !prevState.open
        }));
    }

    render() {
        let chore = this.props.chore;
        let user = this.props.user;
        let content;
        // chore must match with the author's first and last name, and chore must not be complete
        if (chore.authorFirstName === user.firstName && chore.authorLastName === user.lastName && chore.complete) {
            content = (
                <div className="card z-depth chore-summary">
                    <div className="card-content grey-text text-darken-3">
                        <span className="card-title">
                            {chore.title}
                        </span>
                        <span className="card-title">
                            Due By: 
                            <br></br>
                            {moment(chore.date.toDate()).format('dddd, LL')}
                        </span>
                        <p>
                            Posted by {chore.authorFirstName} {chore.authorLastName}
                        </p>
                        <p className="grey-text">
                            {moment(chore.createdAt.toDate()).calendar()}
                        </p>
                    </div>
                </div>
            )
        } else {
            content = <div></div>
        }
        return (content)
    }
}

export default HistorySummary;