export const createChore = (chore) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        const user = chore.assigned;
        const authorId = user.id;
        // const profile = getState().firebase.profile;
        // const authorId = getState().firebase.auth.uid;
        firestore.collection('chores').add({
            title: chore.title,
            authorFirstName: user.firstName,
            authorLastName: user.lastName,
            authorId,
            createdAt: new Date(),
            date: chore.date,
            complete: false
        }).then(() => {
            dispatch({ type: 'CREATE_CHORE', chore });
        }).catch((err) => {
            dispatch({ type: 'CREATE_CHORE_ERROR', err });
        })
        
        // Updating chore count for each user
        firestore.collection('users').doc(authorId).get()
            .then(snapshot => {
                return snapshot.data().choreCount + 1;
            }).then(choreCount => {
                firestore.collection('users').doc(authorId).update({
                    choreCount
                });
                // console.log(choreCount);
            });
    }
}