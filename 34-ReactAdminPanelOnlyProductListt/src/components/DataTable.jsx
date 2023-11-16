import React from "react";

import { v4 as uuidv4 } from "uuid";
import EditvsDeleteBtns from "./EditvsDeleteBtns";
const DataTable = ({ products, setProducts }) => {
  return (
    <>
      <table variant="sm">
        <thead>
          <>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Discounted</th>
            <th>UnitsInStock</th>
            <th>Edit</th>
            <th>Delete</th>
          </>
        </thead>
        <tbody>
          {products.map((product) => {
            let found = product.unitsInStock > 20 ? true : false;
            if (!found) {
              return (
                <tr style={{ backgroundColor: "red" }} key={uuidv4()}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.discontinued ? "true" : "false"}</td>
                  <td>{product.unitsInStock}</td>
                  <EditvsDeleteBtns
                    products={products}
                    setProducts={setProducts}
                    product={product}
                  />
                </tr>
              );
            } else {
              return (
                <tr key={uuidv4()}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.discontinued ? "true" : "false"}</td>
                  <td>{product.unitsInStock}</td>
                  <EditvsDeleteBtns
                    products={products}
                    setProducts={setProducts}
                    product={product}
                  />
                </tr>
              );
            }
          })}
        </tbody>
        <tfoot>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Discounted</th>
            <th>UnitsInStock</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default DataTable;
