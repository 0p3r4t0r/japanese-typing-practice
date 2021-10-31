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

type KeyCapProps = Omit<KeyMasonProps, "children"> & { keyMapKey: KeyMapKey };

const KeyMasonComponent = function (props: KeyMasonProps & { tag: string }) {
  const { tag, ...other } = props;
  const Tag = props.tag as keyof JSX.IntrinsicElements;
  return <Tag {...other}>{props.children}</Tag>;
};

const MasonKeyLegend = (props: KeyMasonProps) => (
  <KeyMasonComponent tag="k-legend" {...props}>
    {props.children}
  </KeyMasonComponent>
);

const MasonKeyCap = (props: KeyMasonProps) => (
  <KeyMasonComponent tag="k-cap" {...props}>
    {props.children}
  </KeyMasonComponent>
);

export const MasonKeyRow = (props: KeyMasonProps) => (
  <KeyMasonComponent tag="k-row" {...props}>
    {props.children}
  </KeyMasonComponent>
);

export const Keycap = (props: KeyCapProps) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const onKeydown = (e: KeyboardEvent) => {
    if (e.keyCode === props.keyMapKey.code && !isPressed) setIsPressed(true);
  };

  const onKeyup = (e: KeyboardEvent) => {
    if (e.keyCode === props.keyMapKey.code && isPressed) setIsPressed(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);
    return () => {
      document.removeEventListener("keydown", onKeydown);
      document.removeEventListener("keyup", onKeyup);
    };
  });

  return (
    <MasonKeyCap class={isPressed ? "active" : undefined}>
      {Boolean(props.keyMapKey.shift) ? (
        <>
          <MasonKeyLegend class="medium top left">
            {props.keyMapKey.shift}
          </MasonKeyLegend>
          <MasonKeyLegend class="medium bottom left">
            {props.keyMapKey.key}
          </MasonKeyLegend>
        </>
      ) : (
        <MasonKeyLegend>{props.keyMapKey.key}</MasonKeyLegend>
      )}
    </MasonKeyCap>
  );
};

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
  const [pressedKeyCodes, setPressedKeyCodes] = useState<
    Set<KeyMapKey["code"]>
  >(new Set());

  const onKeydown = (e: KeyboardEvent) => {
    if (!pressedKeyCodes.has(e.keyCode)) {
      const nextPressedKeyCodes = new Set(pressedKeyCodes);
      nextPressedKeyCodes.add(e.keyCode);
      setPressedKeyCodes(nextPressedKeyCodes);
    }
  };

  const onKeyup = (e: KeyboardEvent) => {
    if (pressedKeyCodes.has(e.keyCode)) {
      const nextPressedKeyCodes = new Set(pressedKeyCodes);
      nextPressedKeyCodes.delete(e.keyCode);
      setPressedKeyCodes(nextPressedKeyCodes);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);
    return () => {
      document.removeEventListener("keydown", onKeydown);
      document.removeEventListener("keyup", onKeyup);
    };
  });

  return (
    <div id="keyboard" className="selectable">
      {props.keymap.map((row, index) => (
        <MasonKeyRow style={index % 2 === 1 ? { "--x": "0.5" } : undefined}>
          {row.map((key) => (
            <Keycap keyMapKey={key} />
          ))}
        </MasonKeyRow>
      ))}
    </div>
  );
};
