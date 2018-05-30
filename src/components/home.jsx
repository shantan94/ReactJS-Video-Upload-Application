import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import VideoUpload from "./video_upload.jsx";
import NavBar from "./navbar.jsx";
import { logout } from "../actions";
import { connect } from "react-redux";

class Home extends Component {
  logOut = () => {
    this.props.logout();
    this.props.history.push("/");
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar exit={this.logOut} />
          <Switch>
            <Route exactly component={VideoUpload} pattern="/videoupload" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { logout })(Home);
