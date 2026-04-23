import React, { useRef, useState } from 'react'
import Header from './Header'
import { validate } from '../utils/validate';
import { auth } from '../utils/firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import background from "../assets/BingeBox_Background.png";
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignInButton = () => {
    if(!isSignInForm){
        if(!(name.current.value && email.current.value && password.current.value)){
            setErrorMessage("Please enter all the fields");
        }else{
            setErrorMessage(validate(name.current.value, email.current.value, password.current.value));
        }
    }else{
        if(!(email.current.value && password.current.value)){
            setErrorMessage("Please enter all the fields");
        }else{
            setErrorMessage(validate(null, email.current.value, password.current.value));
        }
    }

    if(errorMessage !== null) return;

    if(!isSignInForm){
        //Sign Up Logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                updateProfile(user, {
                    displayName: name.current.value,
                    photoURL: "https://avatars.githubusercontent.com/u/89463033?s=96&v=4"
                    }).then(() => {
                        // Profile updated!
                        const {uid, email, displayName, photoURL} = auth.currentUser;
                        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                        navigate("/browse");
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
            });
    }else{
        //Sign In Logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate("/browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                if(errorMessage.includes("invalid-credential")){
                    setErrorMessage("Invalid Credentials! Please try again");
                }
            });
    }
  }

  const handleSignInForm = () => {
      setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src={background} alt="bg-image"/>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='w-3/12 p-12 bg-black absolute my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl p-2 my-2'>{ isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input ref={name} type="text" placeholder='Full Name' className='w-full my-4 p-4 rounded-lg bg-gray-700'/>}
            <input ref={email} type="text" placeholder='Email Address' className='w-full my-4 p-4 rounded-lg bg-gray-700'/>
            <input ref={password} type="password" placeholder='Password' className='w-full my-4 p-4 rounded-lg bg-gray-700'/>
            <p className='text-md font-bold py-2 text-yellow-500'>{errorMessage}</p>
            <button className='w-full bg-blue-800 p-4 my-6 rounded-lg' onClick={handleSignInButton}>{ isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='p-2 m-2 cursor-pointer' onClick={handleSignInForm}>{ isSignInForm ? "New to BingeBox? Sign Up now" : "Already a user? Sign In now"}</p>
        </form>
    </div>
  )
}

export default Login