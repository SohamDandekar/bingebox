import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='py-60 px-20 absolute w-screen aspect-video text-white'>
        <h1 className='font-bold text-6xl'>{title}</h1>
        <p className='text-lg w-1/4 my-4'>{overview}</p>
        <div>
            <button className='rounded-lg bg-white text-black text-lg px-8 py-2 hover:bg-opacity-80 font-medium'>▶︎ Play</button>
            <button className='mx-4 rounded-lg bg-gray-500 text-white bg-opacity-60 text-lg px-8 py-2 font-medium hover:bg-opacity-30'>ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;