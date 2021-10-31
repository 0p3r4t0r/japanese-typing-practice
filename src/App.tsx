import React from "react";
import { Keyboard, KeyMap } from "components/organisms/Keyboard";

const layoutUS: KeyMap = [
  [
    { key: "1", shift: "!", code: 1 },
    { key: "2", shift: "@", code: 1 },
    { key: "3", shift: "#", code: 1 },
    { key: "4", shift: "$", code: 1 },
    { key: "5", shift: "%", code: 1 },
    { key: "6", shift: "^", code: 1 },
    { key: "7", shift: "&", code: 1 },
    { key: "8", shift: "*", code: 1 },
    { key: "9", shift: "(", code: 1 },
    { key: "0", shift: ")", code: 1 },
    { key: "-", shift: "_", code: 1 },
  ],
  [
    { key: "Q", code: 1 },
    { key: "W", code: 1 },
    { key: "E", code: 1 },
    { key: "R", code: 1 },
    { key: "T", code: 1 },
    { key: "Y", code: 1 },
    { key: "U", code: 1 },
    { key: "I", code: 1 },
    { key: "O", code: 1 },
    { key: "P", code: 1 },
  ],
  [
    { key: "A", code: 1 },
    { key: "S", code: 1 },
    { key: "D", code: 1 },
    { key: "F", code: 1 },
    { key: "G", code: 1 },
    { key: "H", code: 1 },
    { key: "J", code: 1 },
    { key: "K", code: 1 },
    { key: "L", code: 1 },
    { key: ";", shift: ":", code: 1 },
    { key: "'", shift: "\"", code: 2 },
  ],
  [
    { key: "Z", code: 1 },
    { key: "X", code: 1 },
    { key: "C", code: 1 },
    { key: "V", code: 1 },
    { key: "B", code: 1 },
    { key: "N", code: 1 },
    { key: "M", code: 1 },
    { key: ",", shift: "<", code: 1 },
    { key: ".", shift: ">", code: 1 },
    { key: "/", shift: "/", code: 1 },
  ],
];

function App() {
  return <Keyboard keymap={layoutUS} />;
}

export default App;
