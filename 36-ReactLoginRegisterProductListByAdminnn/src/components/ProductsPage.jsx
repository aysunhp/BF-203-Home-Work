// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { v4 as uuidv4 } from "uuid";
// // import { Card, Flex } from "antd";
// // const { Meta } = Card;
// // import style from "./productpage.module.css";
// // // import { Button } from "react-bootstrap";
// // import { Button } from "antd";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faHeart } from "@fortawesome/free-solid-svg-icons";
// // import SearchProduct from "./SerchProduct";

// // const ProductsPage = ({ fakeProducts, setFakeProducts }) => {
// //   let user = JSON.parse(localStorage.getItem("user"));
// //   const [wishlist, setWishlist] = useState([]);
// //   const [favArr, setFavArr] = useState([]);
// //   const [red, setRed] = useState(false);
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     let favArr = JSON.parse(localStorage.getItem("fav")) || [];
// //     setFavArr(favArr);
// //     setWishlist(favArr);
// //   }, []);

// //   useEffect(() => {
// //     axios
// //       .get("https://6556162184b36e3a431efcfa.mockapi.io/api/products")
// //       .then((res) => {
// //         setProducts(res.data);
// //       });
// //   }, []);
// //   useEffect(() => {
// //     let favArr = JSON.parse(localStorage.getItem("fav")) || [];
// //     setFavArr(favArr);
// //     setWishlist(favArr);
// //   }, []);

// //   let basketArr;
// //   let localBasket = JSON.parse(localStorage.getItem("basket"));
// //   if (localBasket) {
// //     basketArr = [...localBasket];
// //   } else {
// //     basketArr = [];
// //   }

// //   return (
// //     <>
// //       <div className={style.container}>
// //         <h1 className={style.h1}>Products</h1>
// //         <SearchProduct
// //           products={products}
// //           setProducts={setProducts}
// //           fakeProducts={fakeProducts}
// //           setFakeProducts={setFakeProducts}
// //         />
// //         <br />
// //         <Button
// //           onClick={() => {
// //             let sorted = [...products].sort(
// //               (a, b) => a.unitPrice - b.unitPrice
// //             );
// //             setProducts(sorted);
// //           }}
// //         >
// //           Min-Max
// //         </Button>
// //         <Button
// //           onClick={() => {
// //             let sorted = [...products].sort(
// //               (a, b) => b.unitPrice - a.unitPrice
// //             );
// //             setProducts(sorted);
// //           }}
// //         >
// //           Max-Min
// //         </Button>
// //         <br />
// //         {products.map((product) => {
// //           return (
// //             <Card
// //               key={uuidv4()}
// //               hoverable
// //               style={{
// //                 width: 240,
// //               }}
// //               cover={
// //                 <img
// //                   alt="example"
// //                   src="https://wallpapers.com/images/hd/aesthetic-food-pictures-zbvuhugdhljixaqm.jpg"
// //                 />
// //               }
// //             >
// //               <Meta title={product.name} />
// //               <h3>Price: $ {product.unitPrice}</h3>
// //               {product.discountPercentage ? (
// //                 <div
// //                   className={style.divv}
// //                   style={{ backgroundColor: "green" }}
// //                 >
// //                   % {product.discountPercentage}
// //                 </div>
// //               ) : null}
// //               <Button
// //                 type="primary"
// //                 id={product.id}
// //                 className={style.btn}
// //                 ghost
// //                 style={{
// //                   background: "white",
// //                   borderColor: "black",
// //                   color: "black",
// //                 }}
// //                 onClick={(e) => {
// //                   console.log(e.target.parentElement.getAttribute("id"));

// //                   let found = products.find(
// //                     (item) =>
// //                       item.id === e.target.parentElement.getAttribute("id")
// //                   );
// //                   console.log(found);
// //                   basketArr.push(found);

// //                   localStorage.setItem("basket", JSON.stringify(basketArr));
// //                 }}
// //               >
// //                 Add to Card
// //               </Button>
// //               <div
// //                 border="none"
// //                 id={product.id}
// //                 className={style.div}
// //                 onClick={(e) => {
// //                   let found = products.find((item) => item.id === product.id);
// //                   let check = wishlist.some((item) => item.id === found.id);

// //                   setWishlist((prevWishlist) =>
// //                     check
// //                       ? prevWishlist.filter((item) => item.id !== found.id)
// //                       : [...prevWishlist, found]
// //                   );

// //                   localStorage.setItem(
// //                     "fav",
// //                     JSON.stringify(
// //                       check
// //                         ? wishlist.filter((item) => item.id !== found.id)
// //                         : [...wishlist, found]
// //                     )
// //                   );

// //                 }}
// //               >
// //                 <FontAwesomeIcon
// //                   icon={faHeart}
// //                   style={{
// //                     color: wishlist.some((item) => item.id === product.id)
// //                       ? "red"
// //                       : "white",
// //                     height: 30,
// //                   }}
// //                 />
// //               </div>
// //             </Card>
// //           );
// //         })}
// //       </div>
// //     </>
// //   );
// // };

// // export default ProductsPage;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
// import { Card, Button } from "antd";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import style from "./productpage.module.css";
// import SearchProduct from "./SerchProduct";

// const { Meta } = Card;

// const ProductsPage = ({ fakeProducts, setFakeProducts }) => {
//   const [wishlist, setWishlist] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [basket, setBasket] = useState([]);

//   useEffect(() => {
//     let favArr = JSON.parse(localStorage.getItem("fav")) || [];
//     setWishlist(favArr);
//   }, []);

//   useEffect(() => {
//     axios
//       .get("https://6556162184b36e3a431efcfa.mockapi.io/api/products")
//       .then((res) => {
//         setProducts(res.data);
//       });
//   }, []);

//   useEffect(() => {
//     let localBasket = JSON.parse(localStorage.getItem("basket")) || [];
//     setBasket(localBasket);
//   }, []);

//   const addToBasket = (productId) => {
//     let found = products.find((item) => item.id === productId);

//     if (!basket.some((item) => item.id === found.id)) {
//       let newBasket = [...basket, found];
//       setBasket(newBasket);
//       localStorage.setItem("basket", JSON.stringify(newBasket));
//     }
//   };

//   const toggleWishlist = (productId) => {
//     let found = products.find((item) => item.id === productId);
//     let check = wishlist.some((item) => item.id === found.id);

//     setWishlist((prevWishlist) =>
//       check
//         ? prevWishlist.filter((item) => item.id !== found.id)
//         : [...prevWishlist, found]
//     );

//     localStorage.setItem(
//       "fav",
//       JSON.stringify(
//         check
//           ? wishlist.filter((item) => item.id !== found.id)
//           : [...wishlist, found]
//       )
//     );
//   };

//   return (
//     <>
//       <div className={style.container}>
//         <h1 className={style.h1}>Products</h1>
//         <SearchProduct
//           products={products}
//           setProducts={setProducts}
//           fakeProducts={fakeProducts}
//           setFakeProducts={setFakeProducts}
//         />
//         <br />
//         <Button
//           onClick={() => {
//             let sorted = [...products].sort(
//               (a, b) => a.unitPrice - b.unitPrice
//             );
//             setProducts(sorted);
//           }}
//         >
//           Min-Max
//         </Button>
//         <Button
//           onClick={() => {
//             let sorted = [...products].sort(
//               (a, b) => b.unitPrice - a.unitPrice
//             );
//             setProducts(sorted);
//           }}
//         >
//           Max-Min
//         </Button>
//         <br />
//         {products.map((product) => (
//           <Card
//             key={uuidv4()}
//             hoverable
//             style={{
//               width: 240,
//             }}
//             cover={
//               <img
//                 alt="example"
//                 src="https://wallpapers.com/images/hd/aesthetic-food-pictures-zbvuhugdhljixaqm.jpg"
//               />
//             }
//           >
//             <Meta title={product.name} />
//             <h3>Price: $ {product.unitPrice}</h3>
//             {product.discountPercentage ? (
//               <div className={style.divv} style={{ backgroundColor: "green" }}>
//                 % {product.discountPercentage}
//               </div>
//             ) : null}
//             <Button
//               type="primary"
//               id={product.id}
//               className={style.btn}
//               ghost
//               style={{
//                 background: "white",
//                 borderColor: "black",
//                 color: "black",
//               }}
//               onClick={() => addToBasket(product.id)}
//             >
//               Add to Card
//             </Button>
//             <div
//               border="none"
//               id={product.id}
//               className={style.div}
//               onClick={() => toggleWishlist(product.id)}
//             >
//               <FontAwesomeIcon
//                 icon={faHeart}
//                 style={{
//                   color: wishlist.some((item) => item.id === product.id)
//                     ? "red"
//                     : "white",
//                   height: 30,
//                 }}
//               />
//             </div>
//           </Card>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ProductsPage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Card, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import style from "./productpage.module.css";
import SearchProduct from "./SerchProduct";

const { Meta } = Card;

const ProductsPage = ({ fakeProducts, setFakeProducts }) => {
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );

  useEffect(() => {
    axios
      .get("https://6556162184b36e3a431efcfa.mockapi.io/api/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  const addToBasket = (productId) => {
    let found = products.find((item) => item.id === productId);

    if (!basket.some((item) => item.id === found.id)) {
      let newBasket = [...basket, found];
      setBasket(newBasket);
      localStorage.setItem("basket", JSON.stringify(newBasket));
    }
  };

  const toggleWishlist = (productId) => {
    let found = products.find((item) => item.id === productId);
    let check = wishlist.some((item) => item.id === found.id);

    setWishlist((prevWishlist) =>
      check
        ? prevWishlist.filter((item) => item.id !== found.id)
        : [...prevWishlist, found]
    );

    localStorage.setItem(
      "fav",
      JSON.stringify(
        check
          ? wishlist.filter((item) => item.id !== found.id)
          : [...wishlist, found]
      )
    );
  };

  return (
    <>
      <div className={style.container}>
        <h1 className={style.h1}>Products</h1>
        <SearchProduct
          products={products}
          setProducts={setProducts}
          fakeProducts={fakeProducts}
          setFakeProducts={setFakeProducts}
        />
        <br />
        <Button
          onClick={() => {
            let sorted = [...products].sort(
              (a, b) => a.unitPrice - b.unitPrice
            );
            setProducts(sorted);
          }}
        >
          Min-Max
        </Button>
        <Button
          onClick={() => {
            let sorted = [...products].sort(
              (a, b) => b.unitPrice - a.unitPrice
            );
            setProducts(sorted);
          }}
        >
          Max-Min
        </Button>
        <br />
        {products.map((product) => (
          <Card
            key={uuidv4()}
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src="https://wallpapers.com/images/hd/aesthetic-food-pictures-zbvuhugdhljixaqm.jpg"
              />
            }
          >
            <Meta title={product.name} />
            <h3>Price: $ {product.unitPrice}</h3>
            {product.discountPercentage ? (
              <div className={style.divv} style={{ backgroundColor: "green" }}>
                % {product.discountPercentage}
              </div>
            ) : null}
            <Button
              type="primary"
              id={product.id}
              className={style.btn}
              ghost
              style={{
                background: "white",
                borderColor: "black",
                color: "black",
              }}
              onClick={() => addToBasket(product.id)}
            >
              Add to Card
            </Button>
            <div
              border="none"
              id={product.id}
              className={style.div}
              onClick={() => toggleWishlist(product.id)}
            >
              <FontAwesomeIcon
                icon={faHeart}
                style={{
                  color: wishlist.some((item) => item.id === product.id)
                    ? "red"
                    : "white",
                  height: 30,
                }}
              />
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
