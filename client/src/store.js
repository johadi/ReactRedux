import {createStore,combineReducers,applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import reduxPromise from 'redux-promise-middleware';
import reduxThunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import mathsReducer from './reducers/mathsReducer';

export default createStore(
    combineReducers({user: userReducer,maths: mathsReducer}),
    {},
    applyMiddleware(logger,reduxPromise(),reduxThunk) );
