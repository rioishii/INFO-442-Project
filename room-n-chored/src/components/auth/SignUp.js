import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import { NavLink } from 'react-router-dom';

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        houseName: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />

        return (
            <div>
                <div id="auth-flex">
                    <div>
                        <h3 className="side-margins wrapless">Room & Chored</h3>
                        <p className="marginless">Making sure everyone does their fair share.</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p className="marginless">Already have an account?</p>
                        <NavLink to='/signin' className="width-40">
                            <button className="btn lighten-1 z-depth-0 blue-txt cream-bg width-100">
                                Sign In
                            </button>
                        </NavLink>
                    </div>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <h4>New Roommate?</h4>
                            <br></br>
                            <div className="input-field">
                            <label className="blue-trans-txt" htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" className="unfocused-input" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label className="blue-trans-txt" htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" className="unfocused-input" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label className="blue-trans-txt" htmlFor="email">Email</label>
                                <input type="email" id="email" className="unfocused-input" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label className="blue-trans-txt" htmlFor="password">Password</label>
                                <input type="password" id="password" className="unfocused-input" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label className="blue-trans-txt" htmlFor="houseName">House Name</label>
                                <input type="text" id="houseName" className="unfocused-input" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <button className="btn lighten-1 z-depth-0 cream-txt blue-bg width-100">
                                    Sign Up
                                </button>
                                <div className="red-text center">
                                    { authError ? <p>{authError}</p> : null}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
