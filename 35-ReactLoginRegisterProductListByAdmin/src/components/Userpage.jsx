import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Login from "./Login";
import Register from "./Register";
import Products from "./Products";

const Userpage = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(false);
  const [rname, setRName] = useState("");
  const [rpass, setRPass] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState(true);
  const [user, setUser] = useState([]);
  const aysun = useRef();

  useEffect(() => {
    axios
      .get("https://6556162184b36e3a431efcfa.mockapi.io/api/users")
      .then((res) => {
        setUsers(res.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://6556162184b36e3a431efcfa.mockapi.io/api/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    <>
      {!active ? (
        <Products
          products={products}
          setProducts={setProducts}
          setActive={setActive}
          user={user}
          setUser={setUser}
        />
      ) : (
        <Login
          setName={setName}
          setPass={setPass}
          users={users}
          setActive={setActive}
          name={name}
          pass={pass}
          active={active}
          setRName={setRName}
          setRPass={setRPass}
          setEmail={setEmail}
          setAdmin={setAdmin}
          setUsers={setUsers}
          rname={rname}
          rpass={rpass}
          email={email}
          aysun={aysun}
          user={user}
          setUser={setUser}
        />
      )}
    </>
  );
};

export default Userpage;
