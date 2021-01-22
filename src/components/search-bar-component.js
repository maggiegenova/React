import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  //we need to tell it when we want it to be executed as a second element
  //1. empty array [] (run at the initial render),
  //2.  array with value/s [term], (at the initial render AND after every rerender IF data has changed since last render)
  //3. or no array at all (at the initial render AND after every rerender)
  //we can NOT mark the arrow function as async useEffect (async())<--NO
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    //detect if this would be the first search - if yes - no timer - search immediatelly
    if (term && !results.length) {
      search();
    } else {
      const timeOutId = setTimeout(() => {
        //wait for the input 500ms
        if (term) {
          // check if term is an empty string

          search();
        }
      }, 500);
      return () => {
        //
        clearTimeout(timeOutId);
      };
    }
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          {/* everytime the value is changed, we are going to update the state that keep track of that state */}
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
