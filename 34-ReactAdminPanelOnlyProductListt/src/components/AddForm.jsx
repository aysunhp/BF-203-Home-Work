import React from "react";
import axios from "axios";

const AddForm = ({
  proName,
  setProName,
  proPrice,
  setProPrice,
  products,
  setProducts,
  active,
  setActive,
}) => {
  return (
    <>
      <button
        className="add-product"
        onClick={() => {
          setActive(!active);
        }}
      >
        Add New Product
      </button>
      {active ? (
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Enter product name"
            value={proName}
            onChange={(e) => {
              setProName(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Enter product price"
            value={proPrice}
            onChange={(e) => {
              setProPrice(e.target.value);
            }}
          />
          <button
            className="add-btn"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              let obj = {
                name: proName,
                unitPrice: proPrice,
              };

              setProName("");
              setProPrice(0);
              axios
                .post("https://northwind.vercel.app/api/products", obj)
                .then((res) => {
                  setProducts([...products, res.data]);
                });
            }}
          >
            Add
          </button>
        </form>
      ) : null}
     
    </>
  );
};

export default AddForm;
