import React from "react";
import { Keyboard, KeyMap } from "components/organisms/Keyboard";
import { en_US } from "static/keymaps/en_US";

function App() {
  return <Keyboard keymap={en_US} />;
}

export default App;
