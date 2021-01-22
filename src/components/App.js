import React from "react";
import Accordion from "./accordion-component";
import Search from "./search-bar-component";

const items = [
  {
    title: "What is React?",
    content: "React is a front-end js framework.",
  },
  {
    title: "Why use React?",
    content: "React is a favourite js library among developers.",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components.",
  },
];

export default () => {
  return (
    <div>
      <Search />
    </div>
  );
};
