import React from "react";
import SongList from "./song-list-component";
import SongDetail from "./song-details-component";
//import { selectSong } from "../actions"; // because it is named export, we place {} when importing

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
