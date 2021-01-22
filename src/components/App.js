import React from "react";
import SearchBar from "./search-bar-component";
import youtube from "../api/youtube";
import VideoList from "./video-list-component";
import VideoDetails from "./video-detail-component";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    //whatever we place here, it will be displayed to the user when first loads
    this.onTermSubmit("cats"); //we are going to search for cats and show the results on the screen
  }

  onTermSubmit = async (term) => {
    //get the newly fetched videos and return them as list
    // console.log(term); //we get what the search term is
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              {" "}
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>

        {/* the results from the search will be stored in 'videos' and that's why we pass the elements to the component */}
      </div>
    );
  }
}

export default App;
