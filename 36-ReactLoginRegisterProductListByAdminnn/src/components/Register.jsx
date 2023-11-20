import React from "react";
import { Button, Input } from "antd";
import axios from "axios";
import style from "./login.module.css";

const Register = ({
  setRName,
  setRPass,
  setEmail,
  setAdmin,
  setUsers,
  rname,
  rpass,
  email,
  aysun,
  toggle,
  setToggle,
}) => {
  return (
    <form
      action=""
      className={style.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Input
        type="text"
        className={style.input}
        value={rname}
        placeholder="Enter username"
        onChange={(e) => {
          setRName(e.target.value);
        }}
      />
      <br />
      <Input
        type="password"
        className={style.input}
        value={rpass}
        placeholder="Enter password"
        onChange={(e) => {
          setRPass(e.target.value);
        }}
      />
      <br />
      <Input
        type="email"
        className={style.input}
        value={email}
        placeholder="Enter email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <label id="admin-write"> Is admin?</label>
      <input
        id="admin"
        ref={aysun}
        type="checkbox"
        onChange={(e) => {
          setAdmin(e.target.value);
        }}
      />

      <br />
      <Button
        className={style.btn}
        onClick={() => {
          let newUser = {
            username: rname,
            email: email,
            password: rpass,
            isAdmin: aysun.current.checked,
          };

          axios
            .post(
              "https://6556162184b36e3a431efcfa.mockapi.io/api/users",
              newUser
            )
            .then((res) => {
              setUsers(res.data);
            });

          setRName("");
          setRPass("");
          setEmail("");
          setAdmin("");
          console.log((aysun.current.checked = false));

          setToggle(false);
        }}
      >
        Sign in
      </Button>
    </form>
  );
};

export default Register;
