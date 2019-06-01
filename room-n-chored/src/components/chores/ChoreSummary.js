import React, { Component, useReducer } from 'react';
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
            open: false
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            open: !prevState.open
        }));
    }

    deleteChore = (choreId) => {
        const firestore = getFirestore();
        firestore.collection('chores').doc(choreId).delete();
        this.toggle();
    }

    render() {
        let chore = this.props.chore;
        let user = this.props.user;
        let content;
        if (chore.authorFirstName === user.firstName && chore.authorLastName === user.lastName) {
            content = (
                <div className="card z-depth chore-summary">
                <button id="deleteChoreBtn" onClick={this.toggle}>&times;</button>
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{chore.title}</span>
                    <p>Posted by {chore.authorFirstName} {chore.authorLastName}</p>
                    <p className="grey-text">{moment(chore.createdAt.toDate()).calendar()}</p>
                </div>
                <Dialog open={this.state.open}>
                    <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to delete this chore?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.toggle}>
                            No
                        </Button>
                        <Button onClick={choreId => this.deleteChore(chore.id)}>
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