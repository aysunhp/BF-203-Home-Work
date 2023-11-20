import React from "react";
import { Navigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import axios from "axios";
import Login from "./Login";
import Products from "./Products";
import Register from "./Register";
import HeaderSection from "./HeaderSection";
import ProductsPage from "./ProductsPage";
import Wishlist from "./Wishlist";
import Basket from "./Basket";

const Userpage = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [fakeProducts, setFakeProducts] = useState([]);
  const [active, setActive] = useState(false);
  const [rname, setRName] = useState("");
  const [rpass, setRPass] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState(true);
  const [user, setUser] = useState([]);
  const [basket, setBasket] = useState([]);
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
        setFakeProducts(res.data);
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderSection />}>
            <Route
              index
              element={
                <Login
                  setName={setName}
                  setPass={setPass}
                  setActive={setActive}
                  name={name}
                  pass={pass}
                  active={active}
                  setRName={setRName}
                  setRPass={setRPass}
                  setEmail={setEmail}
                  setAdmin={setAdmin}
                  rname={rname}
                  rpass={rpass}
                  email={email}
                  aysun={aysun}
                  setUser={setUser}
                />
              }
            />
            <Route
              path="products"
              element={
                <ProductsPage
                  products={products}
                  basket={basket}
                  setBasket={setBasket}
                  fakeProducts={fakeProducts}
                  setFakeProducts={setFakeProducts}
                />
                // <Products
                //   products={products}
                //   setProducts={setProducts}
                //   fakeProducts={fakeProducts}
                //   setFakeProducts={setFakeProducts}
                //   setActive={setActive}
                //   user={user}
                //   setUser={setUser}
                // />
              }
            />
            <Route
              path="admin"
              element={
                <Products
                  products={products}
                  setProducts={setProducts}
                  fakeProducts={fakeProducts}
                  setFakeProducts={setFakeProducts}
                  setActive={setActive}
                  user={user}
                  setUser={setUser}
                />
              }
            />
            <Route path="register" element={<Register />} />
            <Route path="account" element={<Register />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route
              path="basket"
              element={<Basket basket={basket} setBasket={setBasket} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* {!active ? (
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
          setActive={setActive}
          name={name}
          pass={pass}
          active={active}
          setRName={setRName}
          setRPass={setRPass}
          setEmail={setEmail}
          setAdmin={setAdmin}
          rname={rname}
          rpass={rpass}
          email={email}
          aysun={aysun}
          setUser={setUser}
        />
      )} */}
    </>
  );
};

export default Userpage;
{
}
