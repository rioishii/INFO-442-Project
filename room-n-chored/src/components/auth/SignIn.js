import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

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
                <div className="container flex-container">
                    <div>
                        <h3 style={{margin: '0px 10px 0px 5px', whiteSpace: 'nowrap'}}>Room & Chored</h3>
                        <p style={{margin: '0px'}}>Making sure everyone does their fair share.</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p style={{margin: '0px'}}>Don't have an account?</p>
                        <NavLink to='/signup' style={{width: '40%'}}>
                            <button className="btn lighten-1 z-depth-0" style={{color: 'rgb(25, 96, 140)', backgroundColor: 'rgb(255, 249, 239)', width: '100%'}}>
                                Sign Up
                            </button>
                        </NavLink>
                    </div>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <h4>Welcome!</h4>
                            <br></br>
                            <div className="input-field">
                                <label htmlFor="email" style={{color: 'rgba(25, 96, 140, 0.8)'}}>Email</label>
                                <input type="email" id="email" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="password" style={{color: 'rgba(25, 96, 140, 0.8)'}}>Password</label>
                                <input type="password" id="password" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <button className="btn lighten-1 z-depth-0" style={{color: 'rgb(255, 249, 239)', backgroundColor: 'rgb(25, 96, 140)', width: '100%'}}>
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
