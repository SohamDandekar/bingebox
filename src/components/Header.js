import React, { useEffect } from 'react';
import logo from "../assets/BingeBox_Logo.png";
import userIcon from "../assets/user-icon.png"
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate} from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            // User signs up/ signs in
            const {uid, email, displayName, photoURL} = user;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            navigate("/browse");
        } else {
            // User is signed out
            dispatch(removeUser());
            navigate("/");
        }
      });

      //Unsubscribe onAuthChanged event when component unmounts
      return () => unsubscribe();

    }, []);
  
  return (
    <div className='absolute w-full bg-gradient-to-b from-black z-10 flex justify-between'>
        <img src={logo} className='w-64 ml-10' alt="bingebox-logo"/>
        {user && <div className='flex p-2 mt-9 mr-8'>
          <img className="w-12 h-12" src={user?.photoURL || userIcon} alt="user-icon"/>
          <button onClick={handleSignOut} className='text-white bg-yellow-500 rounded-lg h-12 px-2 mx-2'>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header