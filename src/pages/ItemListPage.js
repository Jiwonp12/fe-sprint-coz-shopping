import React, { useState, useEffect } from "react";

import axios from "axios";
import Item from "../components/items/Item";
import classes from "./ItemListPage.module.css";
import Category from "./../components/UI/Category";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";

const ItemListPage = ({ bookmarkState, setBookmarkState }) => {
  const [itemListPage, setItemListPage] = useState([]);
  const [selectedType, setSelectedType] = useState("All");

  const url = "http://cozshopping.codestates-seb.link/api/v1/products";

  const categories = [
    { img: img1, name: "전체", type: "All" },
    { img: img2, name: "상품", type: "Product" },
    { img: img3, name: "카테고리", type: "Category" },
    { img: img4, name: "기획전", type: "Exhibition" },
    { img: img5, name: "브랜드", type: "Brand" },
  ];

  const handleIsBookmarked = item => {
    if (bookmarkState) {
      return bookmarkState.some(x => x.id === item.id);
    } else {
      return false;
    }
  };

  const handleSelectCategory = type => {
    setSelectedType(type);
  };

  useEffect(() => {
    axios.get(url).then(res => {
      setItemListPage(res.data);
    });
  }, []);

  return (
    <div className={classes.itemListPage}>
      <Category
        categories={categories}
        handleSelectCategory={handleSelectCategory}
        selectedType={selectedType}
      />
      <ul className={classes.itemList}>
        {itemListPage
          .filter(item =>
            selectedType === "All" ? true : item.type === selectedType
          )
          .map(item => {
            return (
              <Item
                key={item.id}
                item={item}
                isBookmarked={handleIsBookmarked(item)}
                bookmarkState={bookmarkState}
                setBookmarkState={setBookmarkState}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default ItemListPage;
