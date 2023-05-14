import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import MainPage from "./pages/MainPage";
import ItemListPage from "./pages/ItemListPage";
import BookmarkPage from "./pages/BookmarkPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ItemListPage />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
        </Routes>
      </main>
      <Footer className="footer" />
    </div>
  );
}

export default App;
