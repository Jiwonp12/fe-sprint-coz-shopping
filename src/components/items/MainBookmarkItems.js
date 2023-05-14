import Item from "./Item";
import Error from "./Error";

import classes from "./MainListItems.module.css";

const MainBookmarkItems = ({ bookmarkState, setBookmarkState }) => {
  const handleIsBookmarked = item => {
    if (bookmarkState) {
      return bookmarkState.some(x => x.id === item.id);
    } else {
      return false;
    }
  };

  return (
    <ul className={classes.itemList}>
      {bookmarkState && bookmarkState.length !== 0 ? (
        bookmarkState.slice(0, 4).map(item => {
          return (
            <Item
              key={item.id}
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
  );
};

export default MainBookmarkItems;
