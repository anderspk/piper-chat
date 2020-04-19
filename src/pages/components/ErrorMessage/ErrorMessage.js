import React from "react";

const ErrorMessage = ({ children }) =>
  children ? (
    <p
      style={{
        background: "#F44336",
        color: "white",
        textAlign: "center",
        padding: "2px",
      }}
    >
      {children}
    </p>
  ) : null;

export default ErrorMessage;
