import React from "react";
import ThemedIcon from "./ThemedIcon";
import Map from "../assets/image/Map.png";
import MapIconDark from "../assets/image/Map-dark.png";
import NewYork from "../assets/image/NewYork.png";
import NewYorkDark from "../assets/image/NewYork-dark.png";
import SF from "../assets/image/SF.png";
import SFDark from "../assets/image/SF-dark.png";
import Sydney from "../assets/image/Sydney.png";
import SydneyDark from "../assets/image/Sydney-dark.png";
import Singapore from "../assets/image/Singapore.png";
import SingaporeDark from "../assets/image/Singapore-dark.png";
import "../css/components/LocationComponent.css";

const LocationComponent = () => {
  return (
    <div className="location-component">
      <h2 className="location-title">Revenue by Location</h2>
      <ThemedIcon
        lightSrc={Map}
        darkSrc={MapIconDark}
        className="location-main-icon"
        alt="Main Location"
      />
      <div className="location-small-icons">
        <ThemedIcon
          lightSrc={NewYork}
          darkSrc={NewYorkDark}
          className="location-small-icon"
          alt="Location 1"
        />
        <ThemedIcon
          lightSrc={SF}
          darkSrc={SFDark}
          className="location-small-icon"
          alt="Location 2"
        />
        <ThemedIcon
          lightSrc={Sydney}
          darkSrc={SydneyDark}
          className="location-small-icon"
          alt="Location 3"
        />
        <ThemedIcon
          lightSrc={Singapore}
          darkSrc={SingaporeDark}
          className="location-small-icon"
          alt="Location 4"
        />
      </div>
    </div>
  );
};

export default LocationComponent;
