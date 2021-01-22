import React from "react";
import VideoItem from "./video-item-component";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        video={video}
        onVideoSelect={onVideoSelect}
        key={video.id.videoId}
      />
    );
  });
  return (
    //props.videos ->
    <div className="ui relaxed divided list">{renderedList}</div>
  );
};

export default VideoList;
