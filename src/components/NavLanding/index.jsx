import React from "react";
import "./navlanding.css";
import logonav from "../../assets/logo.png";
import { Link } from "react-router-dom";

const NavLanDing = () => {
  return (
    <div className="navlanding">
      <div className="navlanding_logo">
        <img src={logonav} alt="" className="navlanding_imgs" />
        <p className="navlanding_title">Alvin AI</p>
      </div>

      <ul className="navlanding_ul">
        <li className="navlanding_li">RabbitHole</li>
        <li className="navlanding_li">Quest Terminal</li>
        <li className="navlanding_li">FAQ</li>
        <li className="navlanding_li">Blog</li>
      </ul>

      <div className="navlanding_apps">
        <Link to="/sign-in" className="decoration">
          <button className="navlanding_apps_btn">
            Login <i className="bx bx-chevron-right arr_icons"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavLanDing;
