import React, { useState } from "react";
import Search from "./components/Search";
import YouTubeapi from "./api/YouTubeapi";
import VideosList from "./components/VideosList";
import VideoDetail from "./components/VideoDetail";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onSearchSubmit = async (term) => {
    const results = await YouTubeapi.get("/search", {
      params: { q: term },
    });
    const ytVideos = results.data.items;
    setVideos(ytVideos);
    setSelectedVideo(ytVideos[0]);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };
  return (
    <>
      <div className="container">
        <Search onSearchSubmit={onSearchSubmit} />
        <div className="row">
          <div className="col-md-8">
            <VideoDetail selectedVideo={selectedVideo} />
          </div>
          <div className="col-md-4">
            <VideosList videos={videos} onVideoSelect={onVideoSelect} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
