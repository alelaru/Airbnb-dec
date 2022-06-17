import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import  bg from "../images/frontpagebg.png"
import  logo from "../images/airbnb.png"
import { ConnectButton } from "web3uikit";


const Home = () => {

  return (
    <>
      <div className="container" style={{ backgroundImage: `url(${bg})`}}>
        <div className="containerGradinet"></div>
      </div>
      <div className="topBanner">
        <div className="">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="tabs">
          <div className="selected">Places to Stay</div>
          <div className="">Experiences</div>
          <div className="">Online Experiences</div>
        </div>
        <div className="lrContainer">
          <ConnectButton></ConnectButton>
        </div>
      </div>
    </>
  );
};

export default Home;
