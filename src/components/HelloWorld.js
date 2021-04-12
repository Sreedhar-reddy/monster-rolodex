import React from "react";

export default function HelloWorld(props) {
  return <h1 className={props.className}>Hello World {props.name}!</h1>;
}
