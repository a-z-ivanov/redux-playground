const addLetter = (x, y, letter) => {
    return {
        type: 'ADD_LETTER',
        x,
        y,
        letter
    }
}

export { addLetter };