import React from 'react'

const VideoTitle = (props) => {
const { title, overview } = props;

  return (
    <div className='pt-36 px-12'>
        <h1 className='text-3xl font-bold'>{title}</h1> 
        <p className='py-4 w-1/4'>{overview}</p>
        <div>
            <button className='px-3 py-1 border-solid border-2 w-28 bg-white rounded-md font-semibold'>
                Play
            </button>
            <button className='px-3 ml-2 py-1 border-solid border-2 w-28 bg-gray-300 rounded-md font-semibold'>
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle