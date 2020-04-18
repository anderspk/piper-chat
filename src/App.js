import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
