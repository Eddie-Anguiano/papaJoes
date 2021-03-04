import "./styles/main.scss";
import Home from "./components/Home";
import Template from "./components/Template";
import Header from "./components/Header";
import Menu from "./components/Menu";
import BackDrop from "./components/BackDrop";
import { Route, Switch } from "react-router-dom";
import SideDrawer from "./components/SideDrawer";
import { AnimatePresence } from "framer-motion";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { menuIsActive: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((st) => {
      return { menuIsActive: !st.menuIsActive };
    });
  }

  render() {
    let menu;
    if (this.state.menuIsActive) {
      menu = (
        <>
          <BackDrop />
          <SideDrawer menuIsActive={this.handleClick} />
        </>
      );
    }
    return (
      <Template>
        <AnimatePresence>{menu}</AnimatePresence>

        <div className="template-wrapper">
          <Header menuIsActive={this.handleClick} />
          <main className="template-main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/menu" component={Menu} />
            </Switch>
          </main>
          <footer className="footer">&#169;Pizzamania</footer>
        </div>
      </Template>
    );
  }
}
