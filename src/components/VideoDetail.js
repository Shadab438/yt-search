import React from "react";

const VideoDetail = ({ selectedVideo }) => {
  console.log(selectedVideo);
  if (selectedVideo === null) {
    return " ";
  }
  //   if (!selectedVideo) {
  //     return <div className="text-center">Loading...</div>;
  //   }
  const { snippet, id } = selectedVideo;
  return (
    <>
      <div>
        <div className="ui segment">
          <div
            className="ui embed"
            data-source="youtube"
            data-id={id.videoId}
            data-placeholder={snippet.thumbnails.medium.url}
          >
            <iframe
              title="Video Player"
              src={`https://www.youtube.com/embed/${id.videoId}`}
              allowFullScreen
              autoPlay
            ></iframe>
          </div>
          <h4 className="ui header">{snippet.title}</h4>
          <p className="ui description">{snippet.description}</p>
        </div>
      </div>
    </>
  );
};

export default VideoDetail;
