import React, { Component } from 'react';
import moment from 'moment';
import { getFirestore } from 'redux-firestore';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class ChoreSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            completeModalOpen: false
        }

        this.toggle = this.toggle.bind(this);
        this.toggleCompleteModal = this.toggleCompleteModal.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            open: !prevState.open
        }));
    }

    toggleCompleteModal() {
        this.setState(prevState => ({
            completeModalOpen: !prevState.completeModalOpen
        }));
    }

    deleteChore = (choreId, userId) => {
        const firestore = getFirestore();
        firestore.collection('chores').doc(choreId).delete();
        firestore.collection('users').doc(userId).get()
            .then(snapshot => {
                return snapshot.data().choreCount - 1;
            }).then(choreCount => {
                firestore.collection('users').doc(userId).update({
                    choreCount
                });
                // console.log('Chore successfully deleted!');
            });
        this.toggle();
    }

    completeChore = (choreId, userId) => {
        const firestore = getFirestore();
        firestore.collection('chores').doc(choreId).update({
            complete: true
        });
    }

    render() {
        let chore = this.props.chore;
        let user = this.props.user;
        let content;
        // chore must match with the author's first and last name, and chore must not be complete
        if (chore.assignedFirstName === user.firstName && chore.assignedLastName === user.lastName && !chore.complete) {
            content = (
                <div className="card z-depth chore-summary">
                    <button id="completeChoreBtn" onClick={this.toggleCompleteModal}>
                        &#10003;
                    </button>
                    <button id="deleteChoreBtn" onClick={this.toggle}>
                        &times;
                    </button>
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
                            Assigned to: {chore.assignedFirstName} {chore.assignedLastName}
                        </p>
                        <p>
                            Posted by: {chore.authorFirstName} {chore.authorLastName}
                        </p>
                        <p className="grey-text">
                            Created: {moment(chore.createdAt.toDate()).calendar()}
                        </p>
                    </div>

                    {/* Deletion dialog */}
                    <Dialog open={this.state.open}>
                        <DialogTitle id="alert-dialog-title">
                            {"Confirmation"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Are you sure you want to delete this chore?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.toggle}>
                                No
                            </Button>
                            <Button onClick={(choreId, userId) => this.deleteChore(chore.id, chore.authorId)}>
                                Yes
                            </Button>
                        </DialogActions>
                    </Dialog>

                    {/* Completion dialog */}
                    <Dialog open={this.state.completeModalOpen}>
                        <DialogTitle id="alert-dialog-title">
                            {"Confirmation"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Are you sure this chore is completed?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.toggleCompleteModal}>
                                No
                            </Button>
                            <Button onClick={(choreId, userId) => this.completeChore(chore.id, chore.authorId)}>
                                Yes
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            )
        } else {
            content = <div></div>
        }
        return (content)
    }
}

export default ChoreSummary