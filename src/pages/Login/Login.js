import React, { useState } from "react";
import { TextField, Button, Divider } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import logo from "../../images/logo.png";
import "./login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validated = email && password ? false : true;

  function handleLogin() {
    console.log("email: ", email);
    console.log("password: ", password);
    props.history.push("orders");
  }

  return (
    <div className="Login">
      <div>
        <img className="logo" src={logo} alt="cancercare" />
      </div>
      <div className="LoginForm">
        <div>
          <p className="sign_in_heading">SIGN IN</p>
        </div>
        <div>
          <form noValidate autoComplete="off">
            <TextField
              value={email}
              variant="outlined"
              style={{ padding: 5 }}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              label="Email"
            />
            <br />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              variant="outlined"
              style={{ padding: 5, marginTop: 10 }}
              type="password"
              label="Password"
            />
            <div className="login_btn_div">
              <Button
                className="login_btn"
                variant="contained"
                disabled={false}
                // disabled={validated}
                onClick={handleLogin}
              >
                SIGN IN
              </Button>
            </div>
          </form>
        </div>
        <Divider variant="middle" />
        <div id="footer">
          <span className="account_link">
            <a href="#">Don't have an account</a>
          </span>
          <span className="forget_link">
            <a href="#">Forget Password</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
