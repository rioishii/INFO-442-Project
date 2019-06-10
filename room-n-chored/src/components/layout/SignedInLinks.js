import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/create' className="cream-txt">New Chore</NavLink></li>
            <li><NavLink to='/history' className='cream-txt'>History</NavLink></li>
            <li><a onClick={props.signOut} className="cream-txt">Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating cream-bg blue-txt lighten-1'>{props.profile.initials}</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks) 