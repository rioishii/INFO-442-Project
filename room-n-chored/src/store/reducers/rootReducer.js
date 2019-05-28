import authReducer from './authReducer';
import choreReducer from './choreReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    chore: choreReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer