import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'; 
import './Carousal.scss';

const carouselItems = [
  {
    image: "/assets/bannerinnova.jpg",
    title: "Cab Services In Cochin",
    subtitle: "Experience comfortable and reliable transportation"
  },
  {
    image: "/assets/greenery.png",
    title: "Kerala Holiday Packages",
    subtitle: "Discover the beauty of God's own country"
  },
  {
    image: "/assets/airportpackage.jpg",
    title: "Airport Pickup",
    subtitle: "Hassle-free airport transfers at your convenience"
  },
  {
    image: "/assets/weddingpackage.jpg",
    title: "Wedding Packages",
    subtitle: "Make your special day even more memorable"
  },
  {
    image: "/assets/boat.jpg",
    title: "Boating Packages",
    subtitle: "Explore the serene backwaters of Kerala"
  }
];

function Carousal() {
  return (
    <section className='section-carousel'>
      <Carousel
        className='carousel'
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        swipeable={true}
        showStatus={false}
        showArrows={true}
        autoFocus={true}
        stopOnHover={true}
        transitionTime={500}
        showIndicators={true}
        renderIndicator={(clickHandler, isSelected, index) => (
          <div
            className={`custom-indicator ${isSelected ? 'active' : ''}`}
            onClick={clickHandler}
            key={index}
          />
        )}
      >
        {carouselItems.map((item, index) => (
          <div className='carousel-item' key={index}>
            <div className='carousel-img'>
              <img src={item.image} alt={item.title} />
              <div className="content-overlay">
                <h1 className="title">{item.title}</h1>
                <p className="subtitle">{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default Carousal;