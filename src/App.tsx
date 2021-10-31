import React from "react";
import { Keyboard, KeyMap } from "components/organisms/Keyboard";

const layoutUS: KeyMap = [
  [
    { key: "1", shift: "!", code: 49 },
    { key: "2", shift: "@", code: 50 },
    { key: "3", shift: "#", code: 51 },
    { key: "4", shift: "$", code: 52 },
    { key: "5", shift: "%", code: 53 },
    { key: "6", shift: "^", code: 54 },
    { key: "7", shift: "&", code: 55 },
    { key: "8", shift: "*", code: 56 },
    { key: "9", shift: "(", code: 57 },
    { key: "0", shift: ")", code: 48 },
    { key: "-", shift: "_", code: 189 },
  ],
  [
    { key: "Q", code: 81 },
    { key: "W", code: 87 },
    { key: "E", code: 69 },
    { key: "R", code: 82 },
    { key: "T", code: 84 },
    { key: "Y", code: 89 },
    { key: "U", code: 85 },
    { key: "I", code: 73 },
    { key: "O", code: 79 },
    { key: "P", code: 80 },
  ],
  [
    { key: "A", code: 65 },
    { key: "S", code: 83 },
    { key: "D", code: 68 },
    { key: "F", code: 70 },
    { key: "G", code: 71 },
    { key: "H", code: 72 },
    { key: "J", code: 74 },
    { key: "K", code: 75 },
    { key: "L", code: 76 },
    { key: ";", shift: ":", code: 186 },
    { key: "'", shift: "\"", code: 222 },
  ],
  [
    { key: "Z", code: 90 },
    { key: "X", code: 88 },
    { key: "C", code: 67 },
    { key: "V", code: 86 },
    { key: "B", code: 66 },
    { key: "N", code: 78 },
    { key: "M", code: 77 },
    { key: ",", shift: "<", code: 188 },
    { key: ".", shift: ">", code: 190 },
    { key: "/", shift: "/", code: 191 },
  ],
];

function App() {
  return <Keyboard keymap={layoutUS} />;
}

export default App;
