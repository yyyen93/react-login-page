//With redux, we're hoping to create a store. Which is to store the details of our user whenever they logs in, we want to make sure that they able to access the information 

//All these lines of code make up the boilerplate code for redux. WE NEED TO WRITE THIS CODE IN ORDER FOR REDUX TO WORK.

//configureStore is the replacement of createStore.
import {configureStore, applyMiddleware, compose} from 'redux'; 
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

// import session service : provide tools to store the details of a currently logged in user. npm install redux-react-session --legacy-peer-deps
import {sessionService} from 'redux-react-session';

const initialState={};

const middlewares = [thunk];

const store = configureStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)))

//initialize the session service and pass our store to it.
sessionService.initSessionService(store);

export default store;