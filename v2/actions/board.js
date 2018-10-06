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

export { addLetter, removeLetter };