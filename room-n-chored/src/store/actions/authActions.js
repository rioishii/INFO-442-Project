export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err });
        })
    }
} 

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS'});
        });

    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            // add user into the house if the house already exists
            let houseNames = {};
            firestore.collection('houses').get()
                .then(snapshot => {
                    snapshot.docs.forEach(doc => {
                        houseNames[doc.data().houseName] = doc.id;
                    });
                }).then(() => {
                    if (Object.keys(houseNames).includes(newUser.houseName)) {
                        firestore.collection('houses').doc(houseNames[newUser.houseName]).get()
                            .then(snapshot => {
                                return snapshot.data().roommates;
                            }).then(roommates => {
                                let updatedList = roommates;
                                updatedList.push(resp.user.uid);
                                firestore.collection('houses').doc(houseNames[newUser.houseName]).update({
                                    roommates: updatedList
                                });
                            });
                    } else {
                        firestore.collection('houses').add({
                            houseName: newUser.houseName,
                            roommates: [resp.user.uid]
                        });
                    }
                });

            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0],
                houseName: newUser.houseName,
                choreCount: 0
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }
}