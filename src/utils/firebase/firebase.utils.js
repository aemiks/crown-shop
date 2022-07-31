import {initializeApp, } from 'firebase/app';
import {getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCt_WRwesMVN-mnNV8JbheEaQzPIB369_o",
    authDomain: "crown-shop-b4a5d.firebaseapp.com",
    projectId: "crown-shop-b4a5d",
    storageBucket: "crown-shop-b4a5d.appspot.com",
    messagingSenderId: "726693362967",
    appId: "1:726693362967:web:bf66b4a00577f119594b52"
};
  

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch(error) {
            console.log('error during creating user', error.message);
        } 
    }
    return userDocRef;
}
