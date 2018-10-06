import { createStore } from 'redux';
import { game } from './reducers/game';
import { addLetter, removeLetter } from './actions/board';

const store = createStore(game);

store.dispatch(addLetter(0, 0, 'd'));
store.dispatch(addLetter(0, 1, 'i'));
store.dispatch(addLetter(0, 2, 'c'));
store.dispatch(addLetter(0, 3, 'e'));

console.log(store.getState());

store.dispatch(removeLetter(0, 2));
store.dispatch(removeLetter(0, 3));
store.dispatch(addLetter(0, 2, 'e'));

console.log(store.getState());