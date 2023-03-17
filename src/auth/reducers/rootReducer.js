// Concepts of reducer is to interact with our store and change up values whenever it's needed.

import {combineReducers} from 'redux';

// session
import {sessionReducer} from 'redux-react-session';

const rootReducer = combineReducers({
    session: sessionReducer
})

export default rootReducer;