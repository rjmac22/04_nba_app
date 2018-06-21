import React from 'react';
import VideoList from '../../../widgets/VideosList/videosList'

const VideoMain = () => (
  <VideoList
    type="card"
    title={false}
    loadmore={true}
    start={0}
    amount={5}
  />
)


export default VideoMain;