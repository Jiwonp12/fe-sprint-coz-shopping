import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import Item from "../components/items/Item";
import classes from "./ItemListPage.module.css";
import Category from "../components/items/Category";

import imgAll from "../assets/img1.png";
import imgProduct from "../assets/img2.png";
import imgCategory from "../assets/img3.png";
import imgExhibition from "../assets/img4.png";
import imgBrand from "../assets/img5.png";

const ItemListPage = ({
  bookmarkState,
  setBookmarkState,
  handleAddNoti,
  handleDelNoti,
}) => {
  const [allItemListData, setAllItemListData] = useState([]);
  const [selectedType, setSelectedType] = useState("All");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  const obsRef = useRef(null);
  const preventRef = useRef(true);

  const url = "http://cozshopping.codestates-seb.link/api/v1/products";

  const categories = [
    { img: imgAll, name: "전체", type: "All" },
    { img: imgProduct, name: "상품", type: "Product" },
    { img: imgCategory, name: "카테고리", type: "Category" },
    { img: imgExhibition, name: "기획전", type: "Exhibition" },
    { img: imgBrand, name: "브랜드", type: "Brand" },
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
    axios
      .get(url, {
        method: "GET",
      })
      .then(res => {
        setData(res.data);
      })
      .then(() => {
        const observer = new IntersectionObserver(obsHandler, {
          threshold: 1.0,
        });
        if (obsRef.current) observer.observe(obsRef.current);
        return () => {
          observer.disconnect();
        };
      });
  }, []);

  useEffect(() => {
    setAllItemListData(data.slice(0, 12));
    setPage(1);
  }, [data]);

  useEffect(() => {
    setAllItemListData(
      data
        .filter(item =>
          selectedType === "All" ? true : item.type === selectedType
        )
        .slice(0, 12)
    );
    setPage(1);
  }, [selectedType]);

  useEffect(() => {
    if (page !== 1) {
      getPost();
    }
  }, [page]);

  const obsHandler = entries => {
    //옵저버 콜백함수
    const target = entries[0];
    if (target.isIntersecting && preventRef.current) {
      preventRef.current = false; //옵저버 중복 실행 방지
      setPage(prev => prev + 1); //페이지 값 증가
    }
  };

  const timeoutRef = useRef(null);

  const getPost = () => {
    setIsLoaded(true);
    // 이전에 예약된 setTimeout이 있으면 취소
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // 1초 후에 setShowData를 실행하는 setTimeout 예약
    timeoutRef.current = setTimeout(() => {
      setAllItemListData(prev => [
        ...prev,
        ...data
          .filter(item =>
            selectedType === "All" ? true : item.type === selectedType
          )
          .slice((page - 1) * 12, page * 12),
      ]);
      preventRef.current = true;
      setIsLoaded(false);
    }, 1000);
  };

  return (
    <div className={classes.allItemListData}>
      <Category
        categories={categories}
        handleSelectCategory={handleSelectCategory}
        selectedType={selectedType}
      />
      <ul className={classes.itemList}>
        {allItemListData.map(item => {
          return (
            <Item
              key={item.id + "_" + Math.random()}
              item={item}
              isBookmarked={handleIsBookmarked(item)}
              bookmarkState={bookmarkState}
              setBookmarkState={setBookmarkState}
              handleAddNoti={handleAddNoti}
              handleDelNoti={handleDelNoti}
            />
          );
        })}
      </ul>
      <div ref={obsRef}></div>
      {isLoaded && <div className={classes.loading}></div>}
    </div>
  );
};

export default ItemListPage;
