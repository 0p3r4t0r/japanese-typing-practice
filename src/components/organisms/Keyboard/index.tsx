import React from "react";
import "static/keymason/keymason/style.css";

export const KeyLegend = (props: { children: React.ReactNode }) => {
  const KeyLegendTag = "k-legend" as keyof JSX.IntrinsicElements;
  return <KeyLegendTag className="small">{props.children}</KeyLegendTag>;
};

export const KeyCap = (props: { children: React.ReactNode }) => {
  const KeyCapTag = "k-cap" as keyof JSX.IntrinsicElements;
  return <KeyCapTag className="mod"> {props.children} </KeyCapTag>;
};

export const KeyRow = (props: { children: React.ReactNode }) => {
  const KeyRowTag = "k-row" as keyof JSX.IntrinsicElements;
  return <KeyRowTag className="mod"> {props.children} </KeyRowTag>;
};
