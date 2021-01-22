import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  //useState gives us access to the state system inside of a functional component
  //when we call useState, we get an Array with 2 elements inside of it.
  //The first argument is the state we want to keep track of - a variable that's going to change over time
  //The second argument is a function that will update our peace of state
  //default value of the state (null)

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div className={"title" + active} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={"content" + active}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
