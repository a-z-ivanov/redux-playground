const initialState = {
    board: [
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
    ]
  }

const game = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_LETTER': {
            console.log(`Adding Letter ${action.letter} to [${action.x},${action.y}]`);
            return {
                ...state,
                board: state.board.map((value, index) => {
                    if (index === action.x) {
                        return state.board[action.x].map((value, index) => {
                            if (index === action.y) {
                                return action.letter;
                            } else {
                                return value;
                            }
                        });
                    } else {
                        return value;
                    }
                })
            }
        }
        default:
            return state;
    }
};

export { game };