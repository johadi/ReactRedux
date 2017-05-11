import {createStore,combineReducers,applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import userReducer from './reducers/userReducer';
import mathsReducer from './reducers/mathsReducer';

export default createStore(
    combineReducers({user: userReducer,maths: mathsReducer}),
    {},
    applyMiddleware(logger)
);
