import React from "react";
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

export const Keyboard = (props: { keymap: KeyMap }) => (
  <div id="keyboard" className="selectable">
    {props.keymap.map((row, index) => (
      <KeyRow style={index % 2 === 1 ? { "--x": "0.5" } : undefined}>
        {row.map((key) => (
          // Assign active class to select
          <KeyCap> 
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
