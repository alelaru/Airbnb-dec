import React from "react";
import "./Rentals.css";
import { Link, useLocation } from "react-router-dom";
import { Button, ConnectButton, Icon } from "web3uikit";
import logo from "../images/airbnbRed.png"
import RentalsMap from "../components/RentalsMap";

const Rentals = () => {

  const { state: searchFilters } = useLocation();
  const rentalList = [
    {
      attributes: {
        city: "New York",
        unoDescription: "3 Guests • 2 Beds • 2 Rooms",
        dosDescription: "Wifi • Kitchen • Living Area",
        imgUrl:
          "https://ipfs.moralis.io:2053/ipfs/QmS3gdXVcjM72JSGH82ZEvu4D7nS6sYhbi5YyCw8u8z4pE/media/3",
        lat: "40.716862",
        long: "-73.999005",
        name: "Apartment in China Town",
        pricePerDay: "3",
      },
    },
  ];

  const coords = [];
  rentalList.forEach(e => {
    coords.push({ lat: e.attributes.lat, lng: e.attributes.long})
  })

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

     <div className="line"></div>
     <div className="rentalsContent">
      <div className="rentalsContentL">
        Stays Available for your destination
        {rentalList && 
        React.Children.toArray(rentalList.map(e => {
          return (
            <>
                  <hr className="line2" />
                  <div className="rentalDiv">
                      <img src={e.attributes.imgUrl} alt="rentalImage" className="rentalImg" />
                      <div className="rentalInfo">
                          <div className="rentalTitle">{e.attributes.name}</div>
                          <div className="rentalDesc">
                            {e.attributes.unoDescription}
                          </div>
                          <div className="rentalDesc">
                            {e.attributes.dosDescription}
                          </div>
                          <div className="bottomButton">
                            <Button
                              text="Stay Here"
                            ></Button>
                            <div className="price">
                              <Icon fill="#808080" size={10} svg="matic" ></Icon>{e.attributes.pricePerDay} / Day
                            </div>
                          </div>
                      
                      </div>
                  </div>
            </>
          )
        }))
        }
      </div>
      <div className="rentalsContentR">
        <RentalsMap locations={coords}></RentalsMap>

      </div>
     </div>
    </>
  );
};

export default Rentals;
