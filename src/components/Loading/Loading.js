import React from "react";
import ReactLoading from "react-loading";
import "./Loading.scss";

const Loading = () => (
  <div className="loading">
    <ReactLoading className="react-loading" type="bars" />
  </div>
);

export default Loading;
