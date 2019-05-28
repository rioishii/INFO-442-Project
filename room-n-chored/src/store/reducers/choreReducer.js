const initState = {
    chores: [
        { id: 1, title: 'Clean fridge', content: 'blah blah blah' },
        { id: 2, title: 'Take recycling', content: 'blah blah blah' },
        { id: 3, title: 'Mow the lawn', content: 'blah blah blah' }
    ]
}

const choreReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_CHORE':
            console.log('created chore', action.chore);
            return state
        case 'CREATE_CHORE_ERROR':
            console.log('created chore error', action.err);
            return state
        default:
            return state
    }
}

export default choreReducer