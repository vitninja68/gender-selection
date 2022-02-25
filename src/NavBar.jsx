import React, { Component } from "react";
//import { Link } from "react-router-dom";
import logo from "./photos/awm_logo.png";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center ">
          <div className="App">
            <a className="navbar-brand center" href="#">
              <img src={logo} alt='andwemetLogo' height="22px" />
            </a>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;