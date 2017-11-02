import React from 'react';

const VideoListItem = ({video2, onVideoSelect}) => { //this is the same as const video = props.video const onVideoSelect = props.onVideoSelect
  const imageUrl = video2.snippet.thumbnails.default.url;
  const title = video2.snippet.title;
  return (
    <li onClick={() => onVideoSelect(video2)} className="list-group-item"> {/* it takes the props from videoList, when the user clicks on the li we call the function onVideoSelect*/}
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">{title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
