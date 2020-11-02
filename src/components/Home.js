import React, { Component } from "react";
import Hero from "./Hero";
import panorama from "../images/panorama.png";
import Info from "./Info";

export default class Home extends Component {
  render() {
    return (
      <>
        <Hero />
        <img src={panorama} alt="" className="panorama" />
        <Info />
      </>
    );
  }
}
