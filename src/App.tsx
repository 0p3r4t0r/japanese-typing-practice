import React from "react";
import { KeyCap, KeyLegend, KeyRow } from "components/organisms/Keyboard";
function App() {
  return (
    <KeyRow>
      <KeyCap>
        <KeyLegend>A</KeyLegend>
      </KeyCap>
      <KeyCap>
        <KeyLegend>T</KeyLegend>
      </KeyCap>
      <KeyCap>
        <KeyLegend>O</KeyLegend>
      </KeyCap>
      <KeyCap>
        <KeyLegend>M</KeyLegend>
      </KeyCap>
      <KeyCap>
        <KeyLegend>S</KeyLegend>
      </KeyCap>
    </KeyRow>
  );
}

export default App;
