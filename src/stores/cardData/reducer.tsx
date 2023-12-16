const cardDataReducer = (cardData, action) => {
    switch (action.type) {
        case 'added': {
            return [...cardData, ...action.data]
        }
    }
}

export default cardDataReducer;