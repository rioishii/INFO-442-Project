import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  componentDidMount() {
    this.authUnRegFunc = firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        this.setState(state => {
          state.user = firebaseUser;
          state.loading = false;
          return state;
        });
      } else {
        this.setState(state => {
          state.user = null;
          state.loading = false;
          return state;
        });
      }
    });
  }

  componentWillUnMount() {
    this.authUnRegFunc.off();
  }

  signIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).catch((error) => alert(error));
  }

  signOut() {
    firebase.auth().signOut().catch((error) => alert(error));
  }

  render() {
    if (this.state.user !== null) {
      return (
        <button onClick={this.signOut}>Sign Out</button>
      )
    } else {
      return (
        <button onClick={this.signIn}>Sign In</button>
      )
    }
  }
}
