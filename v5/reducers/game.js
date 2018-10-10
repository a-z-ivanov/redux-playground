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

const playersInitialState = [
	{
		selectedLetter: 'b'
	},
	{
		selectedLetter: 'g'
	}
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
        case "GET_LETTER":
            return state.map((value, index) => {
                if (index === action.x) {
                    return state[action.x].map((value, index) => {
                        if (index === action.y) {
                            return 'a'; //it should get the current player's selected letter
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
};

const players = (state = playersInitialState, action) => {
	switch (action.type) {
		case "REMOVE_SELECTED_LETTER":			
			return state.map((value, index) => {
				if (index === action.playerId) {
					return {
						...value,
						selectedLetter: ''
					};
				} else {
					return value;
				}
			});
		default:
			return state;
	}
};

const game = combineReducers({
	players,
    board
});

export { game };