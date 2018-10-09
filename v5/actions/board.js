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

//a letter is requested from the current player - if the player has a letter selected, this is it
const getLetter = (x, y) => {
    return {
        type: 'GET_LETTER',
        x,
        y
    }
}

export { addLetter, removeLetter, getLetter };