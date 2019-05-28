export const createChore = (chore) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('chores').add({
            ...chore,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_CHORE', chore });
        }).catch((err) => {
            dispatch({ type: 'CREATE_CHORE_ERROR', err });
        })
        
    }
}