import React, { useEffect, useState } from "react";

import "./Homepage.scss";
import airplane from "../imgs/airplaneV3.png";
import clouds from "../imgs/clouds.png";
import logo from "../imgs/flycoprologoV4.png";

import NavBarLinks from "./NavBar";
import Footer from "./Footer";

const Homepage = () => {
  const [showResponsiveNavBar, setShowResponsiveNavBar] = useState(false);
  const [navBarColor, setNavBarColor] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  let className = "navigation-menu-expanded";
  const handleClick = () => {
    addNavBarColor();
    setShowResponsiveNavBar(!showResponsiveNavBar);
  };

  if (showResponsiveNavBar) {
    className = "navigation-menu-expanded";
  } else {
    className = "navigation-menu";
  }

  let navColor = {};
  const addNavBarColor = () => {
    setNavBarColor(true)
  }

  const removeNavBarColor = () => {
    setNavBarColor(false)
  }

  if (navBarColor){
    navColor = {
      background: '#3eaeee'
    }
  } 

  return (
    <div className="container">
      <div className="navbar">
        <nav style={navColor}>
          <a className="logo-link" href="#">
            <p className="flyco-logo">
              <img id="logo-pic" src={logo} alt="FlyCo Pro Logo" />
              {/* <span className="logo-text">FlyCo Pro</span> */}
            </p>
          </a>
          <a onClick={handleClick} className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>
          <NavBarLinks className={className} removeNavBarColor={removeNavBarColor} addNavBarColor={addNavBarColor} />
        </nav>
      </div>

      <section>
        <img id="airplane" style={{transform: `translateX(${offsetY * 0.50}px)`}} src={airplane} alt="airplane on air" />
        {/* <h2 id="welcome-text">Welcome to FlyCo Pro</h2> */}
        <a onClick={addNavBarColor} href="#" id="btn">
          See Available Airlines
        </a>
        <img style={{transform: `translateX(${offsetY * -0.25}px)`}} id="clouds" src={clouds} alt="" />
      </section>

      <div id="about-us">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum saepe
          fuga ab neque in facilis nisi fugit aut, libero sed voluptatem veniam
          nam impedit quisquam vero, rerum voluptatibus? Sint, earum.Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Incidunt cumque dolorum
          sapiente tenetur quam laboriosam soluta perspiciatis expedita magni,
          iusto optio aspernatur aliquam odit doloribus natus ducimus nostrum
          fugit quos.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
