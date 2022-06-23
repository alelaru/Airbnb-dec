import { GoogleApiWrapper, Map } from "google-maps-react";
import React, { useEffect, useState } from "react";

function RentalsMap( {locations, google} ) {

  const [center, setcenter] = useState();

  useEffect(() => {

    var arr = Object.keys(locations)
    var getLad = (key) => locations[key]["lat"]
    var avgLad = arr.reduce((a,c) => a + Number(getLad(c)),0) / arr.length;

    var getLng = (key) => locations[key]["lat"]
    var avgLng = arr.reduce((a,c) => a + Number(getLng(c)),0) / arr.length;

    setcenter({lat: avgLad, lng: avgLng})

  }, [locations]);

  return (
    <>
      { center && 
      <Map
      google={google}
      containerStyle={{
        width: "50vw",
        heigth: "calc(100vh - 135px)",
      }}
      center={center}
      initialCenter={locations[0]}
      zoom={13}
      desableDefaultUI={true}
      ></Map>

      }


    </>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDkkZ902dHxjBVeoXC7lg6KiHGbUHudrZk"
})(RentalsMap) ;
