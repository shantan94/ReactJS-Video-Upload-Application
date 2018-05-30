import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../fullcss.css";

class NavBar extends Component {
  handleExit = () => {
    localStorage.clear();
    this.props.exit();
  };

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="navbar-header">
          <div className="navbar-brand">Video Upload</div>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/videoupload">Home</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right shift">
            <span style={{ color: "white", marginRight: "10px" }}>
              Welcome {localStorage["username"]}
            </span>
            <input
              type="submit"
              value="Logout"
              id="submit"
              onClick={this.handleExit}
              className="btn btn-primary"
            />
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
