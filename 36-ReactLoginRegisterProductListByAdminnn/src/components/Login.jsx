import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import Register from "./Register";
import axios from "axios";
import style from "./login.module.css";

const Login = ({
  active,
  name,
  pass,
  setName,
  setPass,
  setActive,
  setRName,
  setRPass,
  setEmail,
  setAdmin,
  rname,
  rpass,
  email,
  aysun,
  setUser,
}) => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);
  const [newuser, setNewUser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://6556162184b36e3a431efcfa.mockapi.io/api/users")
      .then((res) => {
        setUsers(res.data);
      });
  }, []);
  return (
    <>
      <div className="containerr">
        {toggle ? (
          <Register
            setRName={setRName}
            setRPass={setRPass}
            setEmail={setEmail}
            setAdmin={setAdmin}
            setUsers={setUsers}
            rname={rname}
            rpass={rpass}
            email={email}
            aysun={aysun}
            toggle={toggle}
            setToggle={setToggle}
          />
        ) : (
          <form
            className={style.form}
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Input
              size="large"
              className={style.input}
              placeholder="Enter username"
              prefix={<UserOutlined />}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <br />
            <Input
              type="password"
              className={style.input}
              size="large"
              placeholder="Enter password"
              prefix={<UserOutlined />}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            {console.log(users)}
            {console.log(newuser)}
            <br />
            <Button
              className={style.btn}
              onClick={() => {
                let newUser = users.find(
                  (item) => item.username == name && item.password == pass
                );
                console.log(newUser);
                setNewUser(newUser);
                {
                  newUser ? navigate("/products") : console.log("yoxdu");
                }

                localStorage.setItem("user", JSON.stringify(newUser));
              }}
            >
              Log in
            </Button>
            <br />
            <p>
              Need an acount?
              <span
                className="register"
                onClick={() => {
                  setToggle(true);
                }}
              >
                Sign in
              </span>
            </p>
          </form>
        )}
      </div>
    </>
  );
};

export default Login;
