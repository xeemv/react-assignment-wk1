import React from "react";
import '../index.css';
import NavForm from "./navigation-form";

export default class LoginForm extends React.Component {
  render() {
    // 2.	Create a LoginForm component that should contain username and password input fields, an h3 that says Log In, and a border. Style the component using the default generated css file.
    return (
      <div className="container">
        <NavForm />
        <h3 className="text-center" id="login-logo">
          Log In
        </h3>
        <form action="/action_page.php">
          <div className="mb-3 mt-3">
            <label for="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label for="pwd" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
            />
          </div>
          <div className="form-check mb-3">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                name="remember"
              />
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}