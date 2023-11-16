import React, { useState } from "react";
import axios from "axios";

const EditvsDeleteBtns = ({ product, products, setProducts }) => {
  const [edit, setEdit] = useState(null);
  return (
    <>
      <td>
        <button
          className="edit-btn"
          id={product.id}
          onClick={() => {
            setEdit(product);
          }}
        >
          Edit
        </button>
      </td>
      <td>
        <button
          className="delete-btn"
          id={product.id}
          onClick={(e) => {
            let founds = [...products];
            founds = products.filter(
              (product) => product.id != e.target.getAttribute("id")
            );
            setProducts(founds);
            axios.delete(
              "https://northwind.vercel.app/api/products/" +
                e.target.getAttribute("id"),
              edit
            );
          }}
        >
          Delete
        </button>
      </td>

      {edit ? (
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            let found = products.find((item) => item.id == product.id);
            axios.patch(
              "https://northwind.vercel.app/api/products/" + product.id
            );

            found.name = edit.name;
            found.unitPrice = edit.unitPrice;
            setProducts(...products);
            setEdit(null);
          }}
        >
          <input
            type="text"
            value={edit.name}
            placeholder="Edit product name"
            onChange={() => {
              setEdit({ ...edit, name: e.target.value });
            }}
          />
          <input
            type="number"
            value={edit.unitPrice}
            placeholder="Edit product price"
            onChange={() => {
              setEdit({ ...edit, unitPrice: e.target.value });
            }}
          />
        </form>
      ) : null}
    </>
  );
};

export default EditvsDeleteBtns;
