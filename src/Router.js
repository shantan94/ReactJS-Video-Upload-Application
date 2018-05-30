import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/login.jsx";
import SignUp from "./components/signup.jsx";
import Home from "./components/home.jsx";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("x-jwt-token") ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("x-jwt-token") ? (
        <Redirect to={{ pathname: "/home", state: { from: props.location } }} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <LoginRoute exact path="/" component={Login} />
          <LoginRoute exact path="/login" component={Login} />
          <LoginRoute exact path="/signup" component={SignUp} />
          <PrivateRoute path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
