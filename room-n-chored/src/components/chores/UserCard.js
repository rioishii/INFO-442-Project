import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { getFirestore } from 'redux-firestore';

export default class UserCard extends Component {
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

    deleteUser = (userId) => {
        const firestore = getFirestore();
        firestore.collection('users').doc(userId).delete();
    }

    render() {
        let user = this.props.user;
        return(
            <div className="card z-depth chore-summary">
                <button id="deleteChoreBtn" onClick={this.toggle}>
                    &times;
                </button>
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title user-card-title">{`${user.firstName} ${user.lastName}`}</span>
                    <div className="user-card-underline"></div>
                </div>

                {/* Deletion dialog */}
                <Dialog open={this.state.open}>
                    <DialogTitle id="alert-dialog-title">
                        {"Confirmation"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to delete this user?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.toggle}>
                            No
                        </Button>
                        <Button onClick={(userId) => this.deleteUser(user.id)}>
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}