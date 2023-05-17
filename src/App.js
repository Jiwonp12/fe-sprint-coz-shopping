import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import MainPage from "./pages/MainPage";
import ItemListPage from "./pages/ItemListPage";
import BookmarkPage from "./pages/BookmarkPage";
import Notify from "./components/UI/Notify";

import "./App.css";

function App() {
  const bookmarkRender = JSON.parse(localStorage.getItem("bookmark"));
  const [bookmarkState, setBookmarkState] = useState(bookmarkRender);
  const [notifications, setNotifications] = useState(["noti"]);

  const handleAddNoti = () => {
    const newNotification = {
      id: Date.now(),
      showAddNotify: true,
    };

    setNotifications(prev => [...prev, newNotification]);

    setTimeout(() => {
      setNotifications(prev =>
        prev.filter(noti => noti.id !== newNotification.id)
      );
    }, 3000);
  };

  const handleDelNoti = () => {
    const newNotification = {
      id: Date.now(),
      showDelNotify: true,
    };

    setNotifications(prev => [...prev, newNotification]);

    setTimeout(() => {
      setNotifications(prev =>
        prev.filter(noti => noti.id !== newNotification.id)
      );
    }, 3000);
  };

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                bookmarkState={bookmarkState}
                setBookmarkState={setBookmarkState}
                handleAddNoti={handleAddNoti}
                handleDelNoti={handleDelNoti}
              />
            }
          />
          <Route
            path="/products"
            element={
              <ItemListPage
                bookmarkState={bookmarkState}
                setBookmarkState={setBookmarkState}
                handleAddNoti={handleAddNoti}
                handleDelNoti={handleDelNoti}
              />
            }
          />
          <Route
            path="/bookmark"
            element={
              <BookmarkPage
                bookmarkState={bookmarkState}
                setBookmarkState={setBookmarkState}
                handleAddNoti={handleAddNoti}
                handleDelNoti={handleDelNoti}
              />
            }
          />
        </Routes>
      </main>
      {notifications !== null &&
        notifications.length !== 0 &&
        notifications.map(noti => (
          <Notify
            key={noti.id}
            showAddNotify={noti.showAddNotify}
            showDelNotify={noti.showDelNotify}
          />
        ))}
      <Footer className="footer" />
    </div>
  );
}

export default App;
