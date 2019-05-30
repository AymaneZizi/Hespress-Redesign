import { combineReducers } from 'redux';
import authReducer from './authReducer'
import errorReducer from './errorReducer.js'

export default combineReducers({
    auth: authReducer,
    error: errorReducer
})