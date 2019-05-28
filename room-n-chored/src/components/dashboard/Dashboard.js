import React, { Component } from 'react';
import Notifications from './Notifications';
import ChoreList from '../chores/ChoreList';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        // console.log(this.props);
        const { chores } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ChoreList chores={chores}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        chores: state.chore.chores
    }
}

export default connect(mapStateToProps)(Dashboard)