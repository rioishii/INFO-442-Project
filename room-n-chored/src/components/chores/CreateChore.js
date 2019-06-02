import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createChore } from '../../store/actions/choreActions';
import { Redirect, NavLink } from 'react-router-dom';
import Navbar from '../layout/Navbar';


class CreateChore extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createChore(this.state);
        this.props.history.push('/');
    }

    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div id="chore-flex">
                <Navbar />
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <h4>Create New Chore</h4>
                        <div className="input-field">
                            <label className="blue-trans-txt" htmlFor="title">Title</label>
                            <input type="text" id="title" className="unfocused-input" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label className="blue-trans-txt" htmlFor="content">Chore Content</label>
                            <textarea id="content" className="materialize-textarea unfocused-input" onChange={this.handleChange}></textarea>
                        </div>
                        <div id="button-flex" className="input-field">
                            <NavLink to='/'>
                                <button className="btn lighten-1 z-depth-0 blue-txt cream-bg blue-border marginless">
                                    Cancel
                                </button>
                            </NavLink>
                            <button className="btn lighten-1 z-depth-0 cream-txt blue-bg marginless">
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createChore: (chore) => dispatch(createChore(chore))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateChore)
