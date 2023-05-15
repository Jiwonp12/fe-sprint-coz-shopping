import React from "react";

import classes from "./Item.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Item = ({ item, setBookmarkState, isBookmarked }) => {
  const handleBookmark = item => {
    const bookmark = JSON.parse(localStorage.getItem("bookmark")) || [];

    const existingItemIndex = bookmark.findIndex(x => x.id === item.id);
    const isExistingItem = existingItemIndex !== -1;

    if (isExistingItem) {
      bookmark.splice(existingItemIndex, 1);
    } else {
      bookmark.unshift(item);
    }

    localStorage.setItem("bookmark", JSON.stringify(bookmark));
    setBookmarkState(JSON.parse(localStorage.getItem("bookmark")));
  };

  return (
    <div className={classes.item}>
      <div className={classes.imgBox}>
        <img
          className={classes.img}
          src={item.image_url ? item.image_url : item.brand_image_url}
          alt="img"
        />
        <FontAwesomeIcon
          className={isBookmarked ? classes.bookcolor : classes.bookmark}
          size="lg"
          icon={faStar}
          onClick={() => {
            handleBookmark(item);
          }}
        />
      </div>
      <div className={classes.firstLine}>
        {
          <span className={classes.title}>
            {item.title ? item.title : item.brand_name}
          </span>
        }
        {(() => {
          switch (item.type) {
            case "Brand":
              return <span className={classes.customer}>관심고객수</span>;
            case "Product":
              return (
                <span className={classes.percent}>
                  {item.discountPercentage}%
                </span>
              );
            default:
              return "";
          }
        })()}
      </div>
      <div className={classes.firstLine}>
        <span>{item.sub_title ? item.sub_title : ""}</span>
        <span className={classes.follower}>
          {(() => {
            switch (item.type) {
              case "Product":
                return `${item.price
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원`;
              case "Brand":
                return item.follower
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
              default:
                return "";
            }
          })()}
        </span>
      </div>
    </div>
  );
};

export default Item;
