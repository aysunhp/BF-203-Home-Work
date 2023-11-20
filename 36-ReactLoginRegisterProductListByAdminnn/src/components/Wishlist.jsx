import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import style from "./productpage.module.css";

const { Meta } = Card;

const Wishlist = () => {
  const [arr, setArr] = useState(JSON.parse(localStorage.getItem("fav")) || []);

  useEffect(() => {
    // Update the component state whenever localStorage changes
    setArr(JSON.parse(localStorage.getItem("fav")) || []);
  }, []);

  const handleRemoveFromWishlist = (productId) => {
    const newArr = arr.filter((item) => item.id !== productId);
    localStorage.setItem("fav", JSON.stringify(newArr));
    setArr(newArr); // Update the component state
  };

  return (
    <>
      <div className={style.container}>
        <h1 className={style.h1}>Favorites</h1>
        {arr.map((product) => (
          <Card
            key={product.id}
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
            <Meta title={product.name} description={product.unitPrice} />
            <Button
              type="primary"
              ghost
              style={{
                background: "white",
                borderColor: "black",
                color: "black",
              }}
            >
              Danger
            </Button>
            <div
              border="none"
              id={product.id}
              className={style.div}
              onClick={(e) => {
                handleRemoveFromWishlist(product.id);
              }}
            >
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: "red", height: 30 }}
              />
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Wishlist;
