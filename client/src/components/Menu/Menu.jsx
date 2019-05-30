import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

let Menu = props => {
  return (
    <div className={props.className + " menu"}>
      <ul>
        <li>
          <Link to='/'>الرئيسية</Link>
        </li>
        <li>
          <Link to='/'>السياسة</Link>
        </li>
        <li>
          <Link to='/'>الاقتصاد</Link>
        </li>
        <li>
          <Link to='/'>المجتمع</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
