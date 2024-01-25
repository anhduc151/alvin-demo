import React from "react";
import "./home.css";
import NavLanDing from "../../../components/NavLanding";
import bal from "../../../assets/BAL.png";
import cdt from "../../../assets/CDT.png";
import meetone from "../../../assets/MEETONE.png";
import rsr from "../../../assets/RSR.png";
import smart from "../../../assets/SMART.png";
import tch from "../../../assets/TCH.png";
import tnc from "../../../assets/TNC.png";
import xbc from "../../../assets/XBC.png";

const Home = () => {
  return (
    <div className="home">
      <NavLanDing />
      <div className="home_circle">
        <div className="home_title">
          <h1 className="home_title_h1">
            Earn tokens by using crypto applications
          </h1>

          <p className="home_title_p">
            Alvin AI makes it easy to earn crypto by participating in the best
            cryptonetworks Get Started
          </p>
        </div>

        <div className="home_logo_icons">
          <img src={bal} alt="" className="home_logo_icons_imgs" />
          <img src={cdt} alt="" className="home_logo_icons_imgs" />
          <img src={meetone} alt="" className="home_logo_icons_imgs" />
          <img src={rsr} alt="" className="home_logo_icons_imgs" />
          <img src={smart} alt="" className="home_logo_icons_imgs" />
          <img src={tch} alt="" className="home_logo_icons_imgs" />
          <img src={tnc} alt="" className="home_logo_icons_imgs" />
          <img src={xbc} alt="" className="home_logo_icons_imgs" />
        </div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Home;
