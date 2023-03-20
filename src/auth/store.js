//With redux, we're hoping to create a store. Which is to store the details of our user whenever they logs in, we want to make sure that they able to access the information 

//All these lines of code make up the boilerplate code for redux. WE NEED TO WRITE THIS CODE IN ORDER FOR REDUX TO WORK.

//configureStore is the replacement of createStore.
import {applyMiddleware, compose} from 'redux'; 
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

// import session service : provide tools to store the details of a currently logged in user. npm install redux-react-session --legacy-peer-deps
import {sessionService} from 'redux-react-session';

const initialState={};

const middlewares = [thunk];


/**Reducer must pass in the configureStor as object.
 * https://stackoverflow.com/questions/69983347/redux-combining-reducers
 * https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#reducers
 */
const store = configureStore(
    {
        reducer: rootReducer,
    }, 
    initialState, 
    compose(applyMiddleware(...middlewares))
)

//initialize the session service and pass our store to it.
sessionService.initSessionService(store);

export default store;