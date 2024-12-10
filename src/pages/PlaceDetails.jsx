// src/pages/PlaceDetails.jsx
import React from "react";
import { useLocation } from "react-router-dom";
// import './PlaceDetails.css';

const PlaceDetails = () => {
  const location = useLocation();
  const { image, title, description } = location.state;

  return (
    <div className="placeDetails">
      <div className="imgTitle">
        <img src={image} />
        <h3>{title}</h3>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PlaceDetails;
