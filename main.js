import { createStore } from 'redux';
import { game } from './reducers/game';
import { addLetter } from './actions/board';

const store = createStore(game);

store.dispatch(addLetter(0, 0, 'd'));
store.dispatch(addLetter(0, 1, 'i'));
store.dispatch(addLetter(0, 2, 'e'));

console.log(store.getState());