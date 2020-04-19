import React from "react";
import { ReactComponent as Whale } from "./whale.svg";
import { ReactComponent as Wave } from "./wave.svg";
import { ReactComponent as PPLogo } from "./pplogo.svg";

const Svg = ({ type, ...rest }) => {
  switch (type) {
    case "whale":
      return <Whale {...rest} />;
    case "wave":
      return <Wave {...rest} />;
    case "pplogo":
      return <PPLogo {...rest} />;
    default:
      throw new Error(`No SVG of type ${type} found`);
  }
};

export default Svg;
