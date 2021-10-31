import React, {
  useState,
  useEffect,
  CSSProperties,
  ChangeEvent,
} from "react";
import { Keyboard } from "components/organisms/Keyboard";
import { en_US } from "static/keymaps/en_US";

const inputStyle: CSSProperties = {
  width: "100%",
  textAlign: "center",
};

function App() {
  const [lines, setLines] = useState([] as string[]);
  const [lineIndex, setLineIndex] = useState(0);
  const [targetText, setTargetText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [visibility, setVisibility] =
    useState<CSSProperties["visibility"]>("hidden");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setUserInput(e.target.value);

  useEffect(() => {
    fetch("/texts/amenbo_no_uta/hiragana.txt")
      .then((res) => res.text())
      .then((text) => {
        const textLines = text
          .split("\n")
          .filter((line) => Boolean(line))
          .map((line) => line.replace(/\s/g, ""));
        setLines(textLines);
        setTargetText(textLines[lineIndex]);
      });
  }, []);

  useEffect(() => {
    if (userInput && targetText && userInput === targetText) {
      setVisibility('visible')
      const newLineIndex = lineIndex + 1;
      setLineIndex(newLineIndex);
      setTargetText(lines[newLineIndex]);
      setUserInput("");
    }
  }, [userInput]);

  useEffect(() => {
    if (visibility === "visible") {
      setTimeout(() => {
        setVisibility("hidden");
      }, 500);
    }
  }, [visibility]);

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <input type="text" value={targetText} readOnly style={inputStyle} />
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        style={inputStyle}
      />
      <div style={{ visibility }}>🎉🎉🎉</div>
      <Keyboard keymap={en_US} />
    </div>
  );
}

export default App;
