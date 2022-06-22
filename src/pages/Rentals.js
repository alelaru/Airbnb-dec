import React from "react";
import "./Rentals.css";
import { Link, useLocation } from "react-router-dom";
import { ConnectButton, Icon } from "web3uikit";
import logo from "../images/airbnbRed.png"

const Rentals = () => {

  const { state: searchFilters } = useLocation();
  console.log(searchFilters);
  console.log(searchFilters.destination);


  return (
    <>
     <div className="topBanner">
      <div className="">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <div className="searchReminder">
        <div className="filter">
          {searchFilters.destination}
        </div>
        <div className="vl"></div>
        <div className="filter">
          {searchFilters.checkIn.toLocaleString("default", {month:"short"})}
          {searchFilters.checkIn.toLocaleString("default", {day:"2-digit"})}
           - 
          {searchFilters.checkOut.toLocaleString("default", {month:"short"})}
          {searchFilters.checkOut.toLocaleString("default", {day:"2-digit"})}
        </div>
        <div className="vl"></div>
        <div className="filter">
          {searchFilters.guests} Guest
        </div>
        <div className="searchFiltersIcon">
          <Icon fill="#ffffff" size={20} svg="search"></Icon>
        </div>

      </div>
      <div className="lrContainers">
        <ConnectButton></ConnectButton>
      </div>
     </div>
    </>
  );
};

export default Rentals;
