import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    //ToDo: Make sure we call call back from parent component
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment search bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            {/* we place value, to tell the component  */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
