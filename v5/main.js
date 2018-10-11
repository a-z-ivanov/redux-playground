import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { game } from './reducers/game';
import { addLetter, removeLetter } from './actions/board';
import Board from './components/Board';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'

const store = createStore(game, applyMiddleware(thunkMiddleware));

ReactDom.render(
    <Provider store={store}>
      <Board />
    </Provider>,
    document.getElementById('app')
)

setTimeout(function() {
    store.dispatch(addLetter(0, 0, 'h'));
    store.dispatch(addLetter(0, 1, 'i'));
    store.dispatch(addLetter(0, 2, 'd'));
    store.dispatch(addLetter(0, 3, 'i'));

    store.dispatch(removeLetter(0, 2));
    store.dispatch(addLetter(0, 2, 'h'));
}, 10000);

