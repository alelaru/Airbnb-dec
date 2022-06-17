import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import  bg from "../images/frontpagebg.png"
import  logo from "../images/airbnb.png"
import { ConnectButton, DatePicker, Input, Select } from "web3uikit";


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

      <div className="tabContent">
        <div className="searchFields">
          <div className="inputs">
            Location
            <Select
              defaultOptionIndex={0}
              onChange={(data) => console.log(data.label)}
              options={[
                {
                  id: "ny",
                  label: "New York"
                },
                {
                  id: "lon",
                  label: "London"
                },
                {
                  id: "db",
                  label: "Dubai"
                },                                
                {
                  id: "la",
                  label: "Los Angeles"
                },
                {
                  id: "mc",
                  label: "Mexico City"
                },
              ]}
            ></Select>
          </div>
          <div className="vl"></div>
          <div className="inputs">
            Check-in
            <DatePicker
              id="check-in"
              onChange={(e) => console.log(e.data)}
            ></DatePicker>
          </div>
          <div className="vl"></div>
          <div className="inputs">
            Check-out
            <DatePicker
              id="check-out"
              onChange={(e) => console.log(e.data)}
            ></DatePicker>  
          </div>
          <div className="vl"></div>
          <div className="inputs">
            Guests
            <Input
              value={2}
              name="AddGuests"
              type="number"
              onChange={e => console.log(e.data) }
            >
            </Input>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
