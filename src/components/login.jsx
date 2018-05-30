import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { connect } from "react-redux";
import { login, initiate } from "../actions";
import "../page1.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      login: {
        username: "",
        password: ""
      }
    };
  }

  componentDidMount() {
    this.props.initiate();
  }

  handleLogin = values => {
    this.props.login(values).then(action => {
      if (action.data) {
        localStorage.setItem("x-jwt-token", action.data.token);
        localStorage.setItem("username", action.data.username);
        this.props.history.push("/home");
      } else this.setState({ message: action.err.message });
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Customer Login</h1>
        <hr align="left" width="370" />
        <div className="form-group">
          <Formik
            initialValues={this.state.login}
            onSubmit={values => {
              this.handleLogin(values);
            }}
            render={({ values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <table>
                  <tbody>
                    <tr>
                      <td>Username: </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          name="username"
                          onChange={handleChange}
                          value={values.username}
                          placeholder="enter username"
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Password: </td>
                      <td>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          onChange={handleChange}
                          value={values.password}
                          placeholder="enter password"
                          required
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <span className="error">
                  <b>{this.state.message}</b>
                </span>
                <br />
                <input
                  type="submit"
                  className="btn btn-primary move"
                  value="Log in"
                  name="submit"
                />
                <br />
              </form>
            )}
          />
          <Link to="/signup">
            <input
              type="button"
              className="btn btn-info move1"
              value="New users must register here"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(null, { login, initiate })(Login);
