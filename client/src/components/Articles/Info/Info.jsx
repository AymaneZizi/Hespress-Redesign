import React from "react";
import Emoji from "./Emoji";
import "./Info.css";

export default function Info(props) {
  return (
    <div className="info">
      <Emoji className="icon Emoji" symbol="🇲🇦" label="sheep" />
      <span className="item">
        {props.country}
      </span>
      <span className="icon mbri-clock" />
      <span className="item">
        {props.time}
      </span>
    </div>
  );
}
