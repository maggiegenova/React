import React, { useState } from "react";
import Accordion from "./accordion-component";
import Search from "./search-bar-component";
import DropDown from "./drop-down-component";
import Translate from "./translate-component";

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

const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "A shade of Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Translate />
    </div>
  );
};
