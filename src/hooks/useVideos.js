import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm); //we are going to search for cats and show the results on the screen
  }, [defaultSearchTerm]);

  const search = async (term) => {
    //get the newly fetched videos and return them as list
    // console.log(term); //we get what the search term is
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
