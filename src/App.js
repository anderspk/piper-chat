import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import { auth } from "./services/firebase";
import Loading from "./components/Loading/Loading";

const App = () => {
  const [authenticated, setAuthenticated] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated();
      }
      setLoading(false);
    });
  }, []);

  return (
    <div className="app">
      {loading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Header authenticated={authenticated} />
          <Routes authenticated={authenticated} />
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
