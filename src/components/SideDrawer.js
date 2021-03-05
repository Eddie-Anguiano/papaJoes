import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";

export default class SideDrawer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.menuIsActive();
  }

  render() {
    return (
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: "75vw" }}
        exit={{ x: "75vw" }}
        transition={{ duration: 0.1, stiffness: 100, type: "tween" }}
        className="sideDrawer">
        <IconContext.Provider value={{ className: "sideDrawer-close" }}>
          <div>
            <IoMdClose onClick={this.handleClick} />
          </div>
        </IconContext.Provider>
        <ul className="sideDrawer-list">
          <Link onClick={this.handleClick} to="/" className="sideDrawer-item">
            Home
          </Link>
          <Link
            onClick={this.handleClick}
            to="/menu"
            className="sideDrawer-item">
            Menu
          </Link>
        </ul>
      </motion.div>
    );
  }
}
