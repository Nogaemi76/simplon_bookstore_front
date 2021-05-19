import { combineReducers } from 'redux';

//default state
const initialState = {
    name: "My E-brairie",
    init: false,
    loading: false
}

//reducer
const initialStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'APP_INIT':
            return { ...state, loading: true }
        case 'APP_READY':
            return { ...state, loading: false, init: true}
        case 'APP_RESET':
            return state
        default:
            return state
    }
}

//reducer export assigned to key "app"
const rootReducer = combineReducers({ app: initialStateReducer});

export default rootReducer;