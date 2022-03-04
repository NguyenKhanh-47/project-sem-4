import axios from "axios";
import { isEmpty } from "lodash";
import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import "./register.css";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Register = () => {
  const [formRegister, setFormRegister] = useState({
    username: "",
    password: "",
    cnfPassword: "",
    lastName: "",
    firstName: "",
    email: "",
    msisdn: "",
    dateOfBirth: "",
    gender: "male",
    address: "",
  });

  const [show, setShow] = useState(false);

  const [preview, setPreview] = useState({
    pwd: false,
    cnfPwd: false,
  });

  const history = useHistory();

  const handleSubmitRegister = (event) => {
    const { cnfPassword, password } = formRegister;

    if (password !== cnfPassword) {
      setShow(true);
    } else {
      setShow(false);
    }

    const registerProps = {
      username: formRegister.username,
      password: formRegister.password,
      lastName: formRegister.lastName,
      firstName: formRegister.firstName,
      email: formRegister.email,
      msisdn: formRegister.msisdn,
      address: formRegister.address,
      role: 'User',
      isDeleted: false,
      city: "HCM",
      country: "Vn"
    };

    axios
      .post(`${process.env.REACT_APP_URL_BE}/signup`, registerProps)
      .then((res) => {
        console.log("🚀 ~ file: index.js ~ line 58 ~ .then ~ res", res)
        if (res?.status === 200) {
          history.push("/login");
        }
      })
      .catch((error) => console.log('error: ', error));

    event.preventDefault();
  };

  const handleChangeRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormRegister({
      ...formRegister,
      [name]: value,
    });
  };

  const updatePreview_Pwd = () => {
    setPreview({ ...preview, pwd: !preview.pwd });
  };

  const updatePreview_CnfPwd = () => {
    setPreview({ ...preview, cnfPwd: !preview.cnfPwd });
  };

  return localStorage.getItem("token") ? (
    <Redirect to="/message" />
  ) : (
    <div className="wrapper">
      <div className="right pt-5 pb-5">
        <div className="register-container">
          <form onSubmit={handleSubmitRegister} className="register-form">
            <h3 className="text-center">Sign up</h3>
            <div className="form-group mt-4">
              <label>
                User name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter user name"
                name="username"
                value={formRegister.username}
                onChange={handleChangeRegister}
                required
              />
            </div>

            <div className="form-group">
              <label>
                Password <span className="text-danger">*</span>
              </label>
              <div className="input-group mb-3">
                <input
                  type={preview.pwd ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  value={formRegister.password}
                  onChange={handleChangeRegister}
                  required
                />
                <div className="input-group-append" onClick={updatePreview_Pwd}>
                  <span className="btn input-group-text">
                    <FontAwesomeIcon icon={preview.pwd ? faEye : faEyeSlash} />
                  </span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>
                Confirm Password <span className="text-danger">*</span>
              </label>
              <div className="input-group mb-3">
                <input
                  type={preview.cnfPwd ? "text" : "password"}
                  className="form-control"
                  placeholder="Confirm password"
                  name="cnfPassword"
                  value={formRegister.cnfPassword}
                  onChange={handleChangeRegister}
                  required
                />
                <div
                  className="input-group-append"
                  onClick={updatePreview_CnfPwd}
                >
                  <span className="btn input-group-text">
                    <FontAwesomeIcon icon={preview.cnfPwd ? faEye : faEyeSlash} />
                  </span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>
                Last Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Enter your last name"
                value={formRegister.lastName}
                onChange={handleChangeRegister}
                required
              />
            </div>

            <div className="form-group">
              <label>
                First Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="Enter your first name"
                value={formRegister.firstName}
                onChange={handleChangeRegister}
                required
              />
            </div>

            <div className="form-group">
              Email <span className="text-danger">*</span>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Enter your mail"
                value={formRegister.email}
                onChange={handleChangeRegister}
                required
              />
            </div>

            <div className="form-group">
              <label>Date of birth</label>
              <input
                type="date"
                className="form-control"
                name="dateOfBirth"
                value={formRegister.dateOfBirth}
                onChange={handleChangeRegister}
              />
            </div>

            <div className="form-group">
              <label>Telephone</label>
              <input
                type="number"
                name="msisdn"
                className="form-control"
                placeholder="Enter your phone"
                value={formRegister.msisdn}
                onChange={handleChangeRegister}
              />
            </div>

            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                className="form-control"
                placeholder="Enter your address"
                value={formRegister.address}
                onChange={handleChangeRegister}
              />
            </div>

            <div className="form-group">
              <p>Please select your gender:</p>
              <div className="d-flex align-items-center">
                <input
                  className="mb-2"
                  type="radio"
                  name="gender"
                  onChange={handleChangeRegister}
                  value="male"
                  id="male"
                  checked={formRegister.gender === "male"}
                />
                <label for="male" className="ml-2">
                  Male
                </label>
              </div>
              <div className="d-flex align-items-center">
                <input
                  className="mb-2"
                  type="radio"
                  name="gender"
                  onChange={handleChangeRegister}
                  value="female"
                  id="female"
                  checked={formRegister.gender === "female"}
                />
                <label for="female" className="ml-2">
                  Female
                </label>
              </div>
              <div className="d-flex align-items-center">
                <input
                  className="mb-2"
                  type="radio"
                  name="gender"
                  onChange={handleChangeRegister}
                  value="other"
                  id="other"
                  checked={formRegister.gender === "other"}
                />
                <label for="other" className="ml-2">
                  Other
                </label>
              </div>
            </div>
            {show && (
              <div className="text-center text-danger my-3">
                Confirm password does not match
              </div>
            )}

            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Register
            </button>

            <div className="text-center pt-3 text-primary">
              <div
                className="btn text-primary "
                onClick={() => history.push("/login")}
              >
                Back to login
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
