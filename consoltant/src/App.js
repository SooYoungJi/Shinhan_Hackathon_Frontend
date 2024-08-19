import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import MakePortfolioPage from "./pages/MakePortfolioPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import MainPage from "./pages/MainPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/make-portfolio" element={<MakePortfolioPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
