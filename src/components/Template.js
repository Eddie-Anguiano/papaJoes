import React, { Component } from "react";

export default class Template extends Component {
  render() {
    return <div className="template">
      {this.props.children}
    </div>
  }
}
