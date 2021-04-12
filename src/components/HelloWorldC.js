import React, { Component } from "react";

export default class HelloWorldC extends Component {
  constructor() {
    super();

    this.state = {
      message: "Hello World From Class Constructor",
    };
  }
  render() {
    return <h1>{this.state.message}</h1>;
  }
}
