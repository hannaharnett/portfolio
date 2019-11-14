import React, { Component } from "react";
import "./navIcon.css";

class NavIcon extends Component {
  render() {
    return (
      <div
        className={this.props.isToggleOn ? "navTrigger active" : "navTrigger"}
        onClick={
          this.props.isToggleOn ? this.props.closeNav : this.props.openNav
        }
      >
        <i />
        <i />
        <i />
      </div>
    );
  }
}

export default NavIcon;
