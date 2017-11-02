import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video1) => { //return an array of videos
    return (
      <VideoListItem
      onVideoSelect={props.onVideoSelect} //takes the property from App and pass it to VideoListItem
      key={video1.etag} // identifier of each video so when you want to change one specific video you can do it
      video={video1} /> //passing this as a property of VideoListItem
    )
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList
