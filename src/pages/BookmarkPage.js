import React, { useState, useEffect, useRef } from "react";

import Item from "../components/items/Item";
import classes from "./BookmarkPage.module.css";
import Category from "./../components/UI/Category";
import Error from "../components/items/Error";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";

const BookmarkPage = ({ bookmarkState = [], setBookmarkState }) => {
  const [itemListPage, setItemListPage] = useState([]);
  const [selectedType, setSelectedType] = useState("All");
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);

  const obsRef = useRef(null);
  const preventRef = useRef(true);
  const endRef = useRef(false);

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

  const updateData = (start, end) => {
    setItemListPage(
      bookmarkState
        .filter(item =>
          selectedType === "All" ? true : item.type === selectedType
        )
        .slice(start, end)
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(obsHandler, {
      threshold: 1.0,
    });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  const obsHandler = entries => {
    const target = entries[0];
    if (target.isIntersecting && preventRef.current) {
      preventRef.current = false; //옵저버 중복 실행 방지
      setPage(prev => prev + 1); //페이지 값 증가
    }
  };

  useEffect(() => {
    updateData(0, page * 12);
  }, [bookmarkState]);

  useEffect(() => {
    updateData(0, 12);
    setPage(1);
  }, [selectedType]);

  useEffect(() => {
    if (page !== 1) getPost();
  }, [page]);

  let timer = null;
  const getPost = () => {
    setLoad(true);
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      setItemListPage(prev => [
        ...prev,
        ...bookmarkState
          .filter(item =>
            selectedType === "All" ? true : item.type === selectedType
          )
          .slice((page - 1) * 12, page * 12),
      ]);
      preventRef.current = true;
      setLoad(false);
    }, 500);
  };

  return (
    <div className={classes.itemListPage}>
      <Category
        categories={categories}
        handleSelectCategory={handleSelectCategory}
        selectedType={selectedType}
      />
      <ul className={classes.itemList}>
        {bookmarkState && bookmarkState.length !== 0 ? (
          itemListPage.map(item => {
            return (
              <Item
                key={item.id + "_" + Math.random()}
                item={item}
                isBookmarked={handleIsBookmarked(item)}
                bookmarkState={bookmarkState}
                setBookmarkState={setBookmarkState}
              />
            );
          })
        ) : (
          <Error />
        )}
      </ul>
      <div ref={obsRef}></div>
      {load && <div className={classes.loading}></div>}
    </div>
  );
};

export default BookmarkPage;
