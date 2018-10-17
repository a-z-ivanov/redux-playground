import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { game } from './reducers/game';
import { addLetter, removeLetter } from './actions/board';
import Board from './components/Board';
import Login from './components/Login';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'
import { firebase } from '../firebase/firebase';
import AppRouter from './routers/AppRouter';

const store = createStore(game, applyMiddleware(thunkMiddleware));

ReactDom.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById('app')
);

setTimeout(function() {
    store.dispatch(addLetter(0, 0, 'h'));
    store.dispatch(addLetter(0, 1, 'i'));
    store.dispatch(addLetter(0, 2, 'd'));
    store.dispatch(addLetter(0, 3, 'e'));

    store.dispatch(removeLetter(0, 2));
    store.dispatch(addLetter(0, 2, 'h'));
}, 10000);

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('log in');
    } else {
        console.log('log out');
    }
})