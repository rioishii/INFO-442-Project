export const createChore = (chore) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({ type: 'CREATE_CHORE', chore});
    }
}