
// import React from 'react';
// import ReactDOM from 'react-dom'
// //import App from './components/App';
//
// ReactDOM.render(<App/>,document.getElementById('app'));

import {createStore} from 'redux';
const initialState={
    result: 1,
    lastValues: [],
    username: 'jimoh'
}
const reducer=(state=initialState,action)=>{
    switch (action.type){
        case 'ADD':
            state={
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues,action.payload],
            }
            break;
        case 'SUBTRACT':
            state={
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues,action.payload],
            }
            break;
        case 'MULTIPLY':
            state={
                ...state,
                result: state.result * action.payload,
                lastValues: [...state.lastValues,action.payload],
                username: 'Ovenje',
            };
            break;
    }
    return state;
}

const store=createStore(reducer);
store.subscribe(()=>{
    console.log('Store updated ',store.getState());
})
store.dispatch({
    type: 'ADD',
    payload: 100
});

store.dispatch({
    type: 'ADD',
    payload: 22
});
store.dispatch({
    type: 'SUBTRACT',
    payload: 80
});
store.dispatch({
    type: 'MULTIPLY',
    payload: 3
});