export const createChore = (chore) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('chores').add({
            ...chore,
            authorFirstName: 'Rio',
            authorLastName: 'Ishii',
            authorId: 12145,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_CHORE', chore });
        }).catch((err) => {
            dispatch({ type: 'CREATE_CHORE_ERROR', err });
        })
        
    }
}