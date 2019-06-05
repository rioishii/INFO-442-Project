import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth, profile } = props;
    console.log(auth);
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <div />
    return (
        <nav className="nav-wrapper blue-bg darken-3">
            <div className="container">
                <Link to='/' className="brand-logo cream-txt">Room & Chored</Link>
                { links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)