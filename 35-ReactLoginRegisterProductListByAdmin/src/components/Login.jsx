import React, { useState } from "react";
import axios from "axios";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Register from "./Register";

const Login = ({
  active,
  name,
  pass,
  setName,
  setPass,
  users,
  setActive,
  setRName,
  setRPass,
  setEmail,
  setAdmin,
  setUsers,
  rname,
  rpass,
  email,
  aysun,
  user,
  setUser,
}) => {
  const [toggle, setToggle] = useState(false);
  console.log(user);
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
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              className="login-inp"
              placeholder="Enter username"
              required="required"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br />
            <input
              type="password"
              className="login-inp"
              placeholder="Enter password"
              required="required"
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            {console.log(users)}
            <br />
            <Button
              className="login-btn"
              onClick={() => {
                let newUser = users.find((user) => {
                  return user.username == name && user.password == pass;
                });
                console.log(newUser);
                setUser(newUser);
                {
                  newUser ? setActive(!active) : console.log("yoxdu");
                }
              }}
            >
              Log in
            </Button>
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
