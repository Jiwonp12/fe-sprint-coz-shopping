import React from "react";
import Item from "./Item";

import classes from "./MainListItems.module.css";

const MainListItems = ({
  itemList,
  bookmarkState,
  setBookmarkState,
  handleAddNoti,
  handleDelNoti,
}) => {
  const handleIsBookmarked = item => {
    if (bookmarkState) {
      return bookmarkState.some(x => x.id === item.id);
    } else {
      return false;
    }
  };

  return (
    <ul className={classes.itemList}>
      {itemList.map(item => {
        return (
          <Item
            key={item.id}
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
  );
};

export default MainListItems;
