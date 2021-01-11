import React from "react";
import "./InfiniteText.scss";
const InfiniteText = ({ width, ...props }) => {
  return (
    <>
      <p class="marquee">
        <span>
          {props.children} - {props.children} - {props.children} -{" "}
          {props.children} - {props.children} - {props.children} -{" "}
          {props.children} - {props.children} - {props.children} -{" "}
          {props.children} - {props.children} - {props.children} -&nbsp;
        </span>
      </p>
      <p class="marquee marquee2">
        <span>
          {props.children} - {props.children} - {props.children} -{" "}
          {props.children} - {props.children} - {props.children} -{" "}
          {props.children} - {props.children} - {props.children} -{" "}
          {props.children} - {props.children} - {props.children} -&nbsp;
        </span>
      </p>
    </>
  );
};

export default InfiniteText;
