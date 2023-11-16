import React from "react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import DiscountBtn from "./DiscountBtn";

const SearchProduct = ({ products, setProducts }) => {
  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input 
        className="search-input"
          type="text"
          placeholder="Search product"
          onKeyUp={(e) => {
            let founds = products.filter((product) =>
              product.name.toLowerCase().includes(e.target.value)
            );
            setProducts(founds);
            // setProducts(products);
          }}
        />
        <DiscountBtn products={products} setProducts={setProducts} />
      </form>
    </>
  );
};

export default SearchProduct;

// import React, { useState, useEffect } from "react";
// import { Input } from "@chakra-ui/react";

// const SearchProduct = ({ products, setProducts }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState(products);

//   useEffect(() => {
//     const founds = products.filter((product) =>
//       product.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredProducts(founds);
//   }, [searchQuery, products]);

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   return (
//     <>
//       <form
//         action=""
//         onSubmit={(e) => {
//           e.preventDefault();
//         }}
//       >
//         <Input
//           type="text"
//           placeholder="Search product"
//           value={searchQuery}
//           onChange={handleSearch}
//         />
//       </form>


//       {/* <div>
//         {filteredProducts.map((product) => (
//           <div key={product.id}>{product.name}</div>
//         ))}
//       </div> */}
//     </>
//   );
// };

// export default SearchProduct;
