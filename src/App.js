import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import { auth } from "./services/firebase";

const App = () => {
  const [authenticated, setAuthenticated] = useState();

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      console.log({ user });

      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated();
      }
    });
  }, []);

  console.log(authenticated);

  return (
    <div className="app">
      <BrowserRouter>
        <Header authenticated={authenticated} />
        <Routes authenticated={authenticated} />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
