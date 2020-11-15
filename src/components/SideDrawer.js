import React, { Component } from "react";
import { IoMdClose } from "react-icons/io";
import { IconContext } from "react-icons";

export default class SideDrawer extends Component {
  constructor(props) {
    super(props);
    this.handleThis = this.handleThis.bind(this);
  }

  handleThis() {
    this.props.menuIsActive();
  }

  render() {
    return (
      <div className="sideDrawer">
        <IconContext.Provider value={{ className: "sideDrawer-close" }}>
          <div>
            <IoMdClose onClick={this.handleThis} />
          </div>
        </IconContext.Provider>
        <ul className="sideDrawer-list">
          <li className="sideDrawer-item">Contact</li>
          <li className="sideDrawer-item">Home</li>
          <li className="sideDrawer-item">About</li>
        </ul>
      </div>
    );
  }
}
