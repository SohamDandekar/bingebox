import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='md:py-60 py-28 px-5 md:px-20 absolute w-screen aspect-video text-white'>
        <h1 className='font-bold text-xl md:text-6xl'>{title}</h1>
        <p className='hidden md:inline-block text-lg w-1/4 my-4'>{overview}</p>
        <div className='md:mt-0 mt-2'>
            <button className='rounded-lg bg-white text-black md:text-lg md:px-8 px-2 md:py-2 py-1 hover:bg-opacity-80 font-medium'>▶︎ Play</button>
            <button className='hidden md:inline-block mx-4 rounded-lg bg-gray-500 text-white bg-opacity-60 text-lg px-8 py-2 font-medium hover:bg-opacity-30'>ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;