import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const FilterButtons = ({ products, setProducts }) => {
  return (
    <>
      <div className="containerr">
        <Button
          className="filter-btn"
          onClick={() => {
            let sorted = [...products].sort((a, b) =>
              a.name.localeCompare(b.name)
            );

            setProducts(sorted);
          }}
        >
          A-Z
        </Button>
        <Button
          className="filter-btn"
          onClick={() => {
            let sorted = [...products].sort((a, b) =>
              b.name.localeCompare(a.name)
            );

            setProducts(sorted);
          }}
        >
          Z-A
        </Button>
        <Button
          className="filter-btn"
          onClick={() => {
            let sorted = [...products].sort(
              (a, b) => a.unitPrice - b.unitPrice
            );
            {
              console.log(sorted);
            }
            setProducts(sorted);
          }}
        >
          Min-Max
        </Button>
        <Button
          className="filter-btn"
          onClick={() => {
            let sorted = [...products].sort(
              (a, b) => b.unitPrice - a.unitPrice
            );
            {
              console.log(sorted);
            }
            setProducts(sorted);
          }}
        >
          Max-Min
        </Button>
      </div>
    </>
  );
};

export default FilterButtons;
