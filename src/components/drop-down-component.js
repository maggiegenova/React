import React, { useState, useEffect, useRef } from "react";

const DropDown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false); //track if dropdown is open or not
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    });
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      //not displaying on the list the selected value
      return null;
    }

    return (
      <div
        key={option.value}
        onClick={() => {
          onSelectedChange(option);
        }}
        className="item"
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
