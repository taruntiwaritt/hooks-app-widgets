import React from "react";
import Accordion from "./components/Accordion";

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
export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
