import React from "react";
import "./App.scss";
import Routes from "./routes";
import Header from "./pages/components/Header/Header";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
