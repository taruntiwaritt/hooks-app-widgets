import React, { useState, useEffect, useRef } from "react";

const DropDown = ({ options, label, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const onBodyClick = (event) => {
    if (ref.current.contains(event.target))
      //checking if the event occured inside our react div "ui form", so that setOpen doesen't gets toggled twice
      return;
    setOpen(false);
  };
  useEffect(() => {
    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);
  const renderedOptions = options.map((option) => {
    if (selected.value === option.value) return null;
    return (
      <div
        key={option.value}
        onClick={() => onSelectedChange(option)}
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
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
        <div className={`text ${selected.value}`}>
          This is in {selected.value} color
        </div>
      </div>
    </div>
  );
};

export default DropDown;
