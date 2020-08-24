import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import DropDown from "./components/DropDown";
import Translate from "./components/Translate";
const items = [
  {
    title: "what is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "what is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "what is React?",
    content: "React is a front end javascript framework",
  },
];

const options = [
  {
    label: "the color red",
    value: "red",
  },
  {
    label: "the color green",
    value: "green",
  },
  {
    label: "the color blue",
    value: "blue",
  },
];

const showAccordion = () => {
  if (window.location.pathname === "/") return <Accordion items={items} />;
};

const showList = () => {
  if (window.location.pathname === "/list") return <Search />;
};

const showDropdown = () => {
  if (window.location.pathname === "/dropdown")
    return (
      <DropDown
        options={options}
        label="select a color"
        selected={selected}
        onSelectedChange={onSelectedChange}
      />
    );
};

const showTranslate = () => {
  if (window.location.pathname === "/translate") return <Translate />;
};

export default () => {
  return (
    <div>
      {showAccordion()}
      {showDropdown()}
      {showList()}
      {showTranslate()}
    </div>
  );
};
