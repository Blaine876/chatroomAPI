import {combineReducers} from 'redux'
import messageReducer from './messageReducer';
import authReducer from './authReducer';

export default combineReducers({
    message: messageReducer,
    auth: authReducer
})