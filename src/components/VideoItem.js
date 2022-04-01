import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  const { snippet } = video;
  //   const { thumbnails } = snippet;

  return (
    <>
      <section
        className="my-2 item single__video d-md-flex justify-content-start align-items-center"
        onClick={() => onVideoSelect(video)}
      >
        <img
          src={snippet.thumbnails.medium.url}
          alt={snippet.description}
          className="single__video img ui  image"
        />
        <div className="content">
          <div className="header">{snippet.title}</div>
        </div>
      </section>
    </>
  );
};

export default VideoItem;
