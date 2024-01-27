import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import logo1 from "../../assets/logo.png";
import DarkMode from "../DarkMode";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const [activePage, setActivePage] = useState("");
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [previousScroll, setPreviousScroll] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isScrolledDown = currentScrollPos > previousScroll;

    if (isScrolledDown && currentScrollPos > 200) {
      setIsNavVisible(false);
    } else {
      setIsNavVisible(true);
    }

    setPreviousScroll(currentScrollPos);
  };

  useEffect(() => {
    setPreviousScroll(window.scrollY);
  }, []);

  // useEffect(() => {
  //   const pathname = location.pathname;
  //   setActivePage(pathname);

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [location, isNavVisible, previousScroll]);

  return (
    <nav className={`nav ${isNavVisible ? "nav_visible" : "nav_hidden"}`}>
      <div className="nav_icons">
        <Link to="/" className="nav_logo">
          <img src={logo1} alt="" className="nav_logo_imgs" />
          <p className="nav_logo_p">Alvin AI</p>
        </Link>

        <div className="nav_icon" onClick={toggleNav}>
          {isNavOpen ? (
            <i className="bx bx-x"></i>
          ) : (
            <i className="bx bx-menu"></i>
          )}
        </div>
      </div>

      <ul className={`nav_links ${isNavOpen ? "nav_links_open" : ""}`}>
        <Link to="/create" className="decoration">
          {" "}
          <li
            className={`nav_links_li ${
              activePage === "/create" ? "active" : ""
            }`}
          >
            Cryptocurrencies
          </li>
        </Link>

        <Link to="/blog-list" className="decoration">
          {" "}
          <li
            className={`nav_links_li ${
              activePage === "/blog-list" ? "active" : ""
            }`}
          >
            Exchanges
          </li>
        </Link>
        <Link to="/contact" className="decoration">
          <li
            className={`nav_links_li ${
              activePage === "/contact" ? "active" : ""
            }`}
          >
            NFT
          </li>
        </Link>

        <Link to="/create" className="decoration">
          {" "}
          <li
            className={`nav_links_li ${
              activePage === "/create" ? "active" : ""
            }`}
          >
            Learn
          </li>
        </Link>

        <Link to="/create" className="decoration">
          {" "}
          <li
            className={`nav_links_li ${
              activePage === "/create" ? "active" : ""
            }`}
          >
            Products
          </li>
        </Link>
      </ul>

      {/* <div className="nav_dropdown" onClick={toggleDropdown}>
        <span>Dropdown</span>
        {isDropdownOpen && (
          <ul className="dropdown_content">
            <li>Dropdown Item 1</li>
            <li>Dropdown Item 2</li>
            <DarkMode />
          </ul>
        )}
      </div> */}
    </nav>
  );
};

export default Navbar;
