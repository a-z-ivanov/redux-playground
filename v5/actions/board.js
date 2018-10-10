const addLetter = (x, y, letter) => {
    return {
        type: 'ADD_LETTER',
        x,
        y,
        letter
    }
}

const removeLetter = (x, y) => {
    return {
        type: 'REMOVE_LETTER',
        x,
        y
    }
}

const removePlayersSelectedLetter = (playerId) => {
	return {
		type: 'REMOVE_SELECTED_LETTER',
		playerId: playerId
	}
}

const isCurrentPlayer = (state, playerId) => {
	// return state.currentPlayerId === playerId;
	return true;
}

const getPlayersSelectedLetter = (state, playerId) => {
	return state.players[playerId].selectedLetter;
}

//a letter is requested from the current player - if the player has a letter selected, this is it
const getLetter = (x, y) => {
	return (dispatch, getState) => {
		const state = getState();
		if (isCurrentPlayer(state, 1)) {
			const currentPlayersSelectedLetter = getPlayersSelectedLetter(state, 1);
			dispatch(removePlayersSelectedLetter(1));
			dispatch(addLetter(x, y, currentPlayersSelectedLetter));
		}
	}
}

export { addLetter, removeLetter, getLetter };