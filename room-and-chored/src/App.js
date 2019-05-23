import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/auth';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: false
    }
  }

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
  handleSignUp(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredentials) => {
        let user = userCredentials.user; //access the newly created user
        console.log('User created: '+user.uid);
        //...
    })
    .catch((error) => { //report any errors
        console.log(error.message);
    });
  }
  
  componentWillUnmount() {
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
    if (this.state !== null && this.state.user !== null) {
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
