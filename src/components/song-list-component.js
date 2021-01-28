import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(song)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{(this, this.renderList())}</div>;
  }
}

const mapStateToProps = (state) => {
  //get states - has 1st argument state
  return { songs: state.songs }; //returns object that shows props inside of the component
};

export default connect(mapStateToProps, {
  selectSong: selectSong, // or just selectSong as the key and value have the same name
})(SongList); //
