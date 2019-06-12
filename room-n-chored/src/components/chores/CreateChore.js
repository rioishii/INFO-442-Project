import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createChore } from '../../store/actions/choreActions';
import { Redirect, NavLink } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { getFirestore } from 'redux-firestore';


class CreateChore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            date: new Date(),
            assigned: '',
            houseName: ''
        }
    }

    handleChange = (e) => {
        if (e.target.name && e.target.name === 'assigned') {
            this.setState({
                [e.target.name]: e.target.value
            });
        } else {
            this.setState({
                [e.target.id]: e.target.value
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createChore(this.state);
        this.props.history.push('/');
    }

    handleDateChange = (e) => {
        let date = e.toDate();
        this.setState({
            date
        })
    }

    render() {
        const { auth, users } = this.props;

        if (!auth.uid) return <Redirect to='/signin' />

        const firestore = getFirestore();
        firestore.collection('users').doc(auth.uid).get()
            .then(snapshot => {
                this.setState({
                    houseName: snapshot.data().houseName
                });
            });

        let userOptions = [];
        if (users) {
            users.forEach(user => {
                if (user.houseName === this.state.houseName) {
                    userOptions.push(
                        <MenuItem value={user}>{user.firstName} {user.lastName}</MenuItem>
                    );
                }
            });
        }

        return (
            <div id="chore-flex">
                <Navbar />
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <h4>Create New Chore</h4>
                        <div className="input-field">
                            <label className="blue-trans-txt" htmlFor="title">Title</label>
                            <input type="text" id="title" className="unfocused-input" required onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label className="blue-trans-txt" htmlFor="title">Due Date</label>
                            <MuiPickersUtilsProvider className="width-40" utils={MomentUtils}>
                                <DatePicker className="width-40"
                                    value={this.state.date}
                                    onChange={date => this.handleDateChange(date)}
                                    minDate={new Date()}
                                />
                            </MuiPickersUtilsProvider>
                        </div>
                        <div className="input-field">
                            <label className="blue-trans-txt" htmlFor="title">Assign To</label>
                            <FormControl className="underline width-40">
                                <InputLabel htmlFor="assigned">Name</InputLabel>
                                <Select
                                    value={this.state.assigned}
                                    onChange={this.handleChange}
                                    inputProps={{
                                        name: 'assigned',
                                        id: 'assigned'
                                    }}
                                >
                                    {userOptions}
                                </Select>
                            </FormControl>
                        </div>
                        <br></br>
                        <div id="button-flex" className="input-field">
                            <button className="btn lighten-1 z-depth-0 cream-txt blue-bg marginless">
                                Create
                            </button>
                            <NavLink to='/'>
                                <button className="btn lighten-1 z-depth-0 blue-txt cream-bg blue-border marginless">
                                    Cancel
                                </button>
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        users: state.firestore.ordered.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createChore: (chore) => dispatch(createChore(chore))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateChore)
