//Action creator
export const selectSong = (song) => {
  //Named export - allows us to export many function declarations from single file at once
  //Return an action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
