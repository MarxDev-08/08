
import React from 'react'
import BackgroundVid from '../BackgroundFilm.mp4'

export const Video = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -10,
      overflow: 'hidden'
    }}>
      <video
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
        autoPlay
        loop
        muted
        src={BackgroundVid}
      ></video>
    </div>
  )
}
