import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

const VideoModal = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="sR3McI66ciw" onClose={() => setOpen(false)} />

      <button className="video-btn" onClick={() => setOpen(true)}><i className="fi flaticon-play" aria-hidden="true"></i></button>
    </React.Fragment>
  )
}

export default VideoModal;