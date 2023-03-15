import { useState } from "react";
import Reservation from "./Components/Reservation";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header></Header>
          <Routes>
            <Route path="/" element={<Main></Main>} />
            <Route path="/reservation" element={<Reservation />} />
          </Routes>
          <Footer></Footer>
        </div>
      </Router>
    </>
  );
}

export default App;
