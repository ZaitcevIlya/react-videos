import React from 'react'
import VideoItem from './VideoItem' 

const VideoList = ({ videos }) => {
  const renderedList = videos.map( item => {
    return <VideoItem video={item}/>
  })
  return (
    <div className="ui relaxed divided list">
      {renderedList}
    </div>
  )
}

export default VideoList
