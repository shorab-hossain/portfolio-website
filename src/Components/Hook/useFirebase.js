import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import intailizeAuthentication from "../Firebase/Firebase.intailize";
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider ();

intailizeAuthentication();

const useFirebase = () => {
    const [user,setUser] = useState({})
    const [error, setError] = useState('')

    const auth = getAuth()
    
   const signInUsingGoogle= () =>{
        signInWithPopup(auth,googleProvider)
        .then((result) =>{
        const{displayName,email, photoURL} = result.user;
        console.log(result.user)
        const signInUser ={
          name: displayName,
          email: email,
          img: photoURL
        }
        setUser(signInUser)
        }).catch((err) =>{
        setError(err.message)
        })

   }
   const signInWithFacebook = () =>{
    signInWithPopup(auth,facebookProvider)
    .then((result) =>{
      const{displayName,email, photoURL} = result.user;
      console.log(result.user)
      const signInUser ={
        name: displayName,
        email: email,
        img: photoURL
      }
      setUser(signInUser)
      }).catch((err) =>{
      setError(err.message)
      })
   }
   const signInWithGithub = () =>{
    signInWithPopup(auth, githubProvider)
  .then((result) => {
    const user = result.user;
    console.log(result.user)
    setUser(user);
  }).catch((error) => {
        setError(error.message)
  });
   }
   const logOut = () =>{
    signOut(auth).then(() => {
        setUser({})
      }).catch((error) => {
        console.log(error.message)
      });
   }
   useEffect(() =>{
    onAuthStateChanged (auth,(user) =>{
        if(user){
            console.log('inside state change',user);
            setUser(user)
        }
    })
   },[])
    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        signInWithGithub,
        signInWithFacebook
    };
};

export default useFirebase;