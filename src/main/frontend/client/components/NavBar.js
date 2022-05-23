import React from "react";
import "./NavBar.scss";

const NavBar = (props) => {

  return (
    <div className={props.className}>
      <ul>
        <li>
          <a onClick={props.removeNavBarColor} href="#" className="active">
            Home
          </a>
        </li>
        <li>
          <a onClick={props.removeNavBarColor} href="#about-us">
            About Us{" "}
          </a>
        </li>
        <li>
          <a onClick={props.addNavBarColor} href="#">Airlines</a>
        </li>
        <li>
          <a onClick={props.addNavBarColor} href="#">Add an Airline</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
