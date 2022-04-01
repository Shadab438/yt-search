import React from "react";
import VideoItem from "./VideoItem";

const VideosList = ({ videos = [], onVideoSelect }) => {
  return (
    <>
      <section className="my-2 ui relaxed divided list">
        {videos.map((video) => {
          return (
            <VideoItem
              key={video.id.videoId}
              video={video}
              onVideoSelect={onVideoSelect}
            />
          );
        })}
      </section>
    </>
  );
};

export default VideosList;
