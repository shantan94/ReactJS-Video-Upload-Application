import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { connect } from "react-redux";
import { signup } from "../actions";
import "../page4.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      signup: {
        username: "",
        password: "",
        email: "",
        phone: "",
        address: ""
      }
    };
  }

  handleForm = values => {
    this.props.signup(values).then(action => {
      if (action.data) this.setState({ message: action.data.message });
      else this.setState({ message: action.err.message });
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Registration</h1>
        <hr align="left" width="350" />
        <div className="form-group">
          <Formik
            initialValues={this.state.signup}
            onSubmit={values => {
              this.handleForm(values);
            }}
            render={({ values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <table>
                  <tbody>
                    <tr>
                      <td>Username:</td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Username"
                          onChange={handleChange}
                          value={values.username}
                          name="username"
                          id="username"
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Password:</td>
                      <td>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter Password"
                          onChange={handleChange}
                          value={values.password}
                          name="password"
                          id="password"
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td>
                        <input
                          type="text"
                          name="email"
                          className="form-control"
                          placeholder="Enter Email"
                          onChange={handleChange}
                          value={values.email}
                          id="email"
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Phone:</td>
                      <td>
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          id="name"
                          placeholder="Enter Phone"
                          onChange={handleChange}
                          value={values.phone}
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Address:</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter Address"
                          name="address"
                          className="form-control"
                          id="address"
                          onChange={handleChange}
                          value={values.address}
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
                  name="register"
                  className="btn btn-primary move"
                  id="register"
                  value="Register"
                />
              </form>
            )}
          />
        </div>
        <Link to="/login">
          <input
            type="button"
            name="back"
            className="btn btn-info"
            id="back"
            value="Go Back to Login"
          />
        </Link>
      </div>
    );
  }
}

export default connect(null, { signup })(SignUp);
