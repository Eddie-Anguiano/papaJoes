import React, { Component } from "react";

export default class SideDrawer extends Component {
  render() {
    return (
      <div className="sideDrawer">
        <ul className="sideDrawer-list">
          <li className="sideDrawer-item">Contact</li>
          <li className="sideDrawer-item">Home</li>
          <li className="sideDrawer-item">About</li>
        </ul>
      </div>
    );
  }
}
