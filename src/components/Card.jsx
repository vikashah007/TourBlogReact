// src/components/Card.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './Card.css';

const Card = ({ place }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/place/${place.id}`, { state: place });
  };

  return (
    <div className="card">
      <img className='cardImg' src={place.image} alt={place.title} />
      <h3>{place.title}</h3>
      <p>{place.shortDescription}</p>
      <button onClick={handleClick}>Explore</button>
    </div>
  );
};

export default Card;
