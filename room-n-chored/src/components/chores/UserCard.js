import React, { Component } from 'react';

export default class UserCard extends Component {
    render() {
        let user = this.props.user;
        return(
            <div className="card z-depth chore-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title user-card-title">{`${user.firstName} ${user.lastName}`}</span>
                    <div className="user-card-underline"></div>
                </div>
            </div>
        )
    }
}