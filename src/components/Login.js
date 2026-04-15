import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleSignInForm = () => {
      setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/6a77b075-d304-4342-a055-c9e435c98b6f/web/IN-en-20260406-TRIFECTA-perspective_82b47017-148f-45be-8db8-d82a0f936d18_large.jpg" alt="bg-image"/>
        </div>
        <form className='w-3/12 p-12 bg-black absolute my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl p-2 my-2'>{ isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type="text" placeholder='Full Name' className='w-full my-4 p-4 rounded-lg bg-gray-700'/>}
            <input type="email" placeholder='Email Address' className='w-full my-4 p-4 rounded-lg bg-gray-700'/>
            <input type="password" placeholder='Password' className='w-full my-4 p-4 rounded-lg bg-gray-700'/>
            <button className='w-full bg-red-700 p-4 my-6 rounded-lg'>{ isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='p-2 m-2 cursor-pointer' onClick={handleSignInForm}>{ isSignInForm ? "New to Netflix? Sign Up now" : "Already a user? Sign In now"}</p>
        </form>
    </div>
  )
}

export default Login