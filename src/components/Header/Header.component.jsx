import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Button, Drawer } from "antd";

import "./Header.style.css";
import LoadingIndicator from "../loading-indicator/LoadingIndicator.component";
import LeftMenu from "./LeftMenu.component";
import RightMenu from "./RightMenu.component";

class Header extends Component {
  state = {
    visible: false,
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <div className="header-container">
        {/* class="fixed-top" style={{ background: "#fff" }} */}
        <LoadingIndicator />
        <nav className="menuBar">
          <div className="logo">
            <Link to="/app">Warchest</Link>
          </div>
          <div className="menuCon">
            <div className="leftMenu">
              <LeftMenu />
            </div>
            <div className="rightMenu">
              <RightMenu />
            </div>
            <Button className="barsMenu" onClick={this.showDrawer}>
              <span className="barsBtn"></span>
            </Button>
            <Drawer
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <LeftMenu mode={"inline"} />
              <RightMenu mode={"inline"} />
            </Drawer>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
