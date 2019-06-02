import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect, NavLink } from 'react-router-dom';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    render() {
        const { authError, auth } = this.props;
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
                        <p className="marginless">Don't have an account?</p>
                        <NavLink to='/signup' className="width-40">
                            <button className="btn lighten-1 z-depth-0 blue-txt cream-bg width-100">
                                Sign Up
                            </button>
                        </NavLink>
                    </div>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <h4>Welcome!</h4>
                            <br></br>
                            <div className="input-field">
                                <label className="blue-trans-txt" htmlFor="email">Email</label>
                                <input type="email" id="email" className="unfocused-input" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label className="blue-trans-txt" htmlFor="password">Password</label>
                                <input type="password" id="password" className="unfocused-input" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <button className="btn lighten-1 z-depth-0 cream-txt blue-bg width-100">
                                    Sign In
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
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
