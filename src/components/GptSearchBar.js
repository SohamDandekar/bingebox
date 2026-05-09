import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LANGUAGE_TEXTS } from '../utils/languageConstants';
import { toggleLanguage } from '../utils/languageSlice';

const GptSearchBar = () => {

  const dispatch = useDispatch();
  const selectedLanguage = useSelector(store => store.lang.language);

  useEffect(() => {
    //Set default language to English on initial render
    dispatch(toggleLanguage("en"));
  }, [])

  return (
    <div className='pt-[12%] flex justify-center'>
        <form className='bg-black w-3/5 grid grid-cols-12'>
            <input type='text' className='col-span-9 m-4 p-4 rounded-lg' placeholder={LANGUAGE_TEXTS[selectedLanguage].placeHolderText} />
            <button className='py-2 px-4 col-span-3 m-4 bg-blue-800 text-white rounded-lg'>{LANGUAGE_TEXTS[selectedLanguage].searchButtonText}</button>
        </form>
    </div>
  )
}

export default GptSearchBar;