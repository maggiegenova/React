import React, { useState, useEffect } from "react";
import SearchBar from "./search-bar-component";
import VideoList from "./video-list-component";
import VideoDetails from "./video-detail-component";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [videos, search] = useVideos("cats"); //expects default search term as argument
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            {" "}
            <VideoDetails video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>

      {/* the results from the search will be stored in 'videos' and that's why we pass the elements to the component */}
    </div>
  );
};

export default App;
