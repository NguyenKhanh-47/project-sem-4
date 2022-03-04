import axios from "axios";
import { isEmpty } from "lodash";
import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import "./login.css";
import "./css/main.css";

const Login = () => {
  const [formRegister, setFormRegister] = useState({
    fullName: "",
    username: "",
    password: "",
    dateOfBirth: "",
    gender: "male",
    city: "",
  });
  console.log(
    "🚀 ~ file: index.js ~ line 9 ~ Login ~ formRegister",
    formRegister
  );

  const [formLogin, setFormLogin] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  const handleSubmitLogin = (event) => {
    const bodyFormData = new FormData();
    bodyFormData.append("username", formLogin.username);
    bodyFormData.append("password", formLogin.password);
    axios({
      method: "get",
      url: `${process.env.REACT_APP_URL_BE}/`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        console.log("🚀 ~ file: index.js ~ line 37 ~ .then ~ res", res);
        if (!isEmpty(res?.data)) {
          const { token, ...restData } = res?.data;
          localStorage.setItem("token", token);
          localStorage.setItem("userInfo", JSON.stringify(restData));
        }
        history.push("/home");
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: index.js ~ line 42 ~ handleSubmitLogin ~ error",
          error
        );
        if (error.response?.status === 401) setShow(true);
        console.log(error?.response);
      });

    event.preventDefault();
  };

  const [show, setShow] = useState(false);

  const handleChangeLogin = (event) => {
    setShow(false);
    const name = event.target.name;
    const value = event.target.value;
    setFormLogin({
      ...formLogin,
      [name]: value,
    });
  };

  return localStorage.getItem("token") ? (
    <Redirect to="/home" />
  ) : (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form
            className="login100-form validate-form"
            onSubmit={handleSubmitLogin}
          >
            <span className="login100-form-title">Login</span>

            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input100"
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChangeLogin}
                value={formLogin.username}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                className="input100"
                type="password"
                name="password"
                placeholder="Password"
                value={formLogin?.password}
                onChange={handleChangeLogin}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>

            <div className="container-login100-form-btn">
              <button type="submit" className="login100-form-btn">
                Login
              </button>
            </div>
            <div className="text-center pt-3 text-primary">
              <div
                className="btn text-success "
                onClick={() => history.push("/register")}
              >
                Create your Account{" "}
                <i
                  className="fa fa-long-arrow-right ml-2 mt-2"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
