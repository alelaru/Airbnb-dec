import React from "react";
import "./Rentals.css";
import { Link, useLocation } from "react-router-dom";

const Rentals = () => {

  const {state: searchFilters } = useLocation();
  console.log(searchFilters);

  return (
    <>
     <Link to="/"> Home </Link>
     {searchFilters &&

     <div className="">{searchFilters.destination.toString()}</div>
     
     }
    </>
  );
};

export default Rentals;
