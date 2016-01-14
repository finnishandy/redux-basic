'use strict';

var _redux = require('redux');

function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([action.text]);
        default:
            return state;
    }
}

let store = (0, _redux.createStore)(todos, ['Use Redux']);

store.dispatch({
    type: 'ADD_TODO',
    text: 'Read the docs'
});

console.log(store.getState());
// [ 'Use Redux', 'Read the docs' ]

