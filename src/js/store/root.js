import { combineReducers } from 'redux';
import mainReducer from './main';
import authReducer from './auth';

//reducer exports assigned to keys "app" & "auth"
const rootReducer = combineReducers({ 
    app: mainReducer,
    auth: authReducer
});

export default rootReducer;