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
import AppRouter, { history } from './routers/AppRouter';

const store = createStore(game, applyMiddleware(thunkMiddleware));
const jsx = <Provider store={store}>
    <AppRouter />
</Provider>;

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDom.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDom.render(<p>Loading...</p>,document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) { //login
        setTimeout(function() {
            store.dispatch(addLetter(0, 0, 'h'));
            store.dispatch(addLetter(0, 1, 'i'));
            store.dispatch(addLetter(0, 2, 'd'));
            store.dispatch(addLetter(0, 3, 'e'));
            
            store.dispatch(removeLetter(0, 2));
            store.dispatch(addLetter(0, 2, 'h'));

            renderApp();

            if (history.location.pathname === '/') {
                history.push('/board');
            }
        }, 10000);
    } else { //logout
        renderApp();
        history.push('/');
    }
});