import { createStore } from 'redux';
import { game } from './reducers/game';
import { addLetter, removeLetter } from './actions/board';
import Board from './components/Board';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'

const store = createStore(game);

ReactDom.render(
    <Provider store={store}>
      <Board />
    </Provider>,
    document.getElementById('app')
)

setTimeout(function() {
    store.dispatch(addLetter(0, 0, 'd'));
    store.dispatch(addLetter(0, 1, 'i'));
    store.dispatch(addLetter(0, 2, 'c'));
    store.dispatch(addLetter(0, 3, 'e'));

    store.dispatch(removeLetter(0, 2));
    store.dispatch(removeLetter(0, 3));
    store.dispatch(addLetter(0, 2, 'e'));
}, 10000);

