import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./basket.module.css";
import { Button } from "antd";

const Basket = () => {
  const [basketArr, setBasketArr] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );

  useEffect(() => {
    setBasketArr(JSON.parse(localStorage.getItem("basket")) || []);
  }, []);

  return (
    <>
      <div className={style.container}>
        <h1>Basket</h1>
        <table className={style.table}>
          <thead className={style.tr}>
            <th className={style.th}>ID</th>
            <th className={style.th}>Name</th>
            <th className={style.th}>Price</th>
            <th className={style.th}>Discounted</th>
            <th className={style.th}>UnitsInStock</th>
            <th className={style.th}>Delete</th>
          </thead>
          <tbody>
            {basketArr &&
              basketArr.map((product) => (
                <tr key={uuidv4()} className={style.tr}>
                  <td className={style.td}>{product.id}</td>
                  <td className={style.td}>{product.name}</td>
                  <td className={style.td}>{product.unitPrice}</td>
                  <td className={style.td}>
                    {product.discontinued ? "true" : "false"}
                  </td>
                  <td className={style.td}>{product.unitsInStock}</td>
                  <td className={style.td} style={{ width: 100 }}>
                    <Button
                      danger
                      className={style.btn}
                      id={product.id}
                      onClick={(e) => {
                        console.log(e.target.getAttribute("id"));
                        let newBasket = basketArr.filter(
                          (item) => item.id !== e.target.getAttribute("id")
                        );

                        localStorage.setItem(
                          "basket",
                          JSON.stringify(newBasket)
                        );
                        setBasketArr(newBasket);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr className={style.tr}>
              <th className={style.th}>ID</th>
              <th className={style.th}>Name</th>
              <th className={style.th}>Price</th>
              <th className={style.th}>Discounted</th>
              <th className={style.th}>UnitsInStock</th>
              <th className={style.th}>Delete</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Basket;
