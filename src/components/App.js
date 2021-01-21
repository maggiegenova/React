import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./search-bar-component";
import ImageList from "./image-list-component";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const responce = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: responce.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
        <ImageList images={this.state.images} />
        {/* Found: {this.state.images.length} images */}
      </div>
    );
  }
}

export default App;
