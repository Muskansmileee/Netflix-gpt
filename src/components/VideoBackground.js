import React from 'react'

const VideoBackground = (props) => {
  const { mainMovie } = props;

  return (
    <div>{mainMovie.title}</div>
  )
}

export default VideoBackground