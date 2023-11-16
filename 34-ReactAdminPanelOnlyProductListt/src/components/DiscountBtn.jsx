import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
const DiscountBtn = ({ products, setProducts }) => {
  return (
    <>
      <Button
        className="discount-btn"
        onClick={() => {
          let discountedProducts = products.filter(
            (product) => product.discontinued == true
          );

          setProducts(discountedProducts);
        }}
      >
        Discontinued
      </Button>
    </>
  );
};

export default DiscountBtn;
