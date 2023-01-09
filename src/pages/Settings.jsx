import React from 'react'
import VideoFile from "../images/test-video.mp4"

export const Settings = () => {
  return (
    <div className='Settings'>
      <main>
        <div className="container">
          <h1>Settings Video</h1>

          <iframe width="560" height="315" src="https://www.youtube.com/embed/P9GqsD2Y1gA" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
      </main>

    </div>
  )
}
