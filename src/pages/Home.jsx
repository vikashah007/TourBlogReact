// src/pages/Home.jsx
import React from 'react';
import Card from '../components/Card';
import places from '../data/places'; // Sample data
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import './Home.css';

const Home = () => {
  return (
    <div className="home">
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/header3.png"
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/header2.png"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/header1.png"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <div className="cardsContainer">
        {places.map((place) => (
          <Card key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default Home;
