import React, { useEffect, useState } from "react";
import "static/keymason/keymason/style.css";

// =============================================================================
// Key Mason React Components
// =============================================================================

type KeyMasonProps = {
  children: React.ReactNode;
  class?: string;
  style?: { [key: string]: string | number }; // TODO: Add types for custom styles
};

const KeyMasonComponent = function (props: KeyMasonProps & { tag: string }) {
  const { tag, ...other } = props;
  const Tag = props.tag as keyof JSX.IntrinsicElements;
  return <Tag {...other}>{props.children}</Tag>;
};

export const KeyLegend = (props: KeyMasonProps) => (
  <KeyMasonComponent tag="k-legend" {...props}>
    {props.children}
  </KeyMasonComponent>
);

export const KeyCap = (props: KeyMasonProps) => (
  <KeyMasonComponent tag="k-cap" {...props}>
    {props.children}
  </KeyMasonComponent>
);

export const KeyRow = (props: KeyMasonProps) => (
  <KeyMasonComponent tag="k-row" {...props}>
    {props.children}
  </KeyMasonComponent>
);

// =============================================================================
// KeyBoard
// =============================================================================

export type KeyMapKey = {
  code: number;
  key: string;
  shift?: string;
};

export type KeyMapRow = KeyMapKey[];

export type KeyMap = KeyMapRow[];

export const Keyboard = (props: { keymap: KeyMap }) => {
  const [pressedKeyCodes, setPressedKeyCodes] = useState<Set<KeyMapKey['code']>>(new Set())

  const onKeydown = (e: KeyboardEvent) => {
    if (!pressedKeyCodes.has(e.keyCode)) {
      const nextPressedKeyCodes = new Set(pressedKeyCodes)
      nextPressedKeyCodes.add(e.keyCode)
      setPressedKeyCodes(nextPressedKeyCodes)
    }
  }

  const onKeyup = (e: KeyboardEvent) => {
    if (pressedKeyCodes.has(e.keyCode)) {
      const nextPressedKeyCodes = new Set(pressedKeyCodes)
      nextPressedKeyCodes.delete(e.keyCode)
      setPressedKeyCodes(nextPressedKeyCodes)
    }

  }

  useEffect(() => {
    document.addEventListener('keydown', onKeydown)
    document.addEventListener('keyup', onKeyup)
    return () => {
      document.removeEventListener('keydown', onKeydown)
      document.removeEventListener('keyup', onKeyup)
    }
  })

  return (
    <div id="keyboard" className="selectable">
      {props.keymap.map((row, index) => (
        <KeyRow style={index % 2 === 1 ? { "--x": "0.5" } : undefined}>
          {row.map((key) => (
            <KeyCap class={pressedKeyCodes.has(key.code) ? "active" : undefined}>
              {Boolean(key.shift) ? (
                <>
                  <KeyLegend class="medium top left">{key.shift}</KeyLegend>
                  <KeyLegend class="medium bottom left">{key.key}</KeyLegend>
                </>
              ) : (
                <KeyLegend>{key.key}</KeyLegend>
              )}
            </KeyCap>
          ))}
        </KeyRow>
      ))}
    </div>
  );
};
