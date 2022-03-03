import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Header />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movie/:imbdID" element={<MovieDetail />} />
        <Route element={<PageNotFound />} />
        <Footer />
      </Routes>
    </div>
  );
}

export default App;
