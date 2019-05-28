import authReducer from './authReducer';
import choreReducer from './choreReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    chore: choreReducer
});

export default rootReducer