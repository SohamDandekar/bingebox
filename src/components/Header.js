import React from 'react';
import logo from "../assets/BingeBox_Logo.png";
import userIcon from "../assets/user-icon.png"
import { signOut } from 'firebase/auth';
import { useNavigate} from 'react-router-dom';
import { auth } from '../utils/firebase';
import store from '../utils/appStore';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();

  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img src={logo} className='w-56 ml-10' alt="bingebox-logo"/>
        {user && <div className='flex p-2 mt-9 mr-8'>
          <img className="w-12 h-12" src={user?.photoURL || userIcon} alt="user-icon"/>
          <button onClick={handleSignOut} className='text-white bg-yellow-500 rounded-lg h-12 px-2 mx-2'>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header