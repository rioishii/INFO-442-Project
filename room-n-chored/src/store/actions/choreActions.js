export const createChore = (chore) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        dispatch({ type: 'CREATE_CHORE', chore});
    }
}