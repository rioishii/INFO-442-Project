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
        lastName: ''
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
                <div className="flex-container">
                    <div>
                        <h3 style={{margin: '0px 10px 0px 5px', whiteSpace: 'nowrap'}}>Room & Chored</h3>
                        <p style={{margin: '0px'}}>Making sure everyone does their fair share.</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p style={{margin: '0px'}}>Already have an account?</p>
                        <NavLink to='/signin' style={{width: '40%'}}>
                            <button className="btn lighten-1 z-depth-0" style={{color: 'rgb(25, 96, 140)', backgroundColor: 'rgb(255, 249, 239)', width: '100%'}}>
                                Sign In
                            </button>
                        </NavLink>
                    </div>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <h4>New Roommate?</h4>
                            <br></br>
                            <div className="input-field">
                            <label htmlFor="firstName" style={{color: 'rgba(25, 96, 140, 0.8)'}}>First Name</label>
                            <input type="text" id="firstName" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="lastName" style={{color: 'rgba(25, 96, 140, 0.8)'}}>Last Name</label>
                                <input type="text" id="lastName" onChange={this.handleChange}/>
                            </div>
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
