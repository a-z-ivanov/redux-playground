import { combineReducers } from "redux";

const boardInitialState = [
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
];

const board = (state = boardInitialState, action) => {
    switch (action.type) {
        case "ADD_LETTER":
            return state.map((value, index) => {
                if (index === action.x) {
                    return state[action.x].map((value, index) => {
                        if (index === action.y) {
                            return action.letter;
                        } else {
                            return value;
                        }
                    });
                } else {
                    return value;
                }
            });
        case "REMOVE_LETTER":
            return state.map((value, index) => {
                if (index === action.x) {
                    return state[action.x].map((value, index) => {
                        if (index === action.y) {
                            return ' ';
                        } else {
                            return value;
                        }
                    });
                } else {
                    return value;
                }
            });    
        default:
            return state;
    }
}

const game = combineReducers({
    board
});

export { game };