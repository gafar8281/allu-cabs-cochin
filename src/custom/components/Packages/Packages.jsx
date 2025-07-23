import React from 'react';
import './Packages.scss';

function Packages() {
  const packages = [
    {
      id: 1,
      name: 'Munnar',
      image: '/assets/munnar.jpg',
      duration: '3 Days / 2 Nights',
      price: '₹12,999',
      highlights: ['Tea Gardens', 'Eravikulam National Park', 'Echo Point'],
      description: 'Experience the beauty of rolling hills and tea plantations in Munnar, Kerala\'s most popular hill station.'
    },
    {
      id: 2,
      name: 'Thekkady',
      image: '/assets/thekkady.jpg',
      duration: '2 Days / 1 Night',
      price: '₹9,999',
      highlights: ['Periyar Wildlife', 'Boat Safari', 'Spice Gardens'],
      description: 'Discover the wild side of Kerala in Thekkady, home to diverse wildlife and spice plantations.'
    },
    {
      id: 3,
      name: 'Aleppey',
      image: '/assets/alleppey.jpg',
      duration: '2 Days / 1 Night',
      price: '₹11,999',
      highlights: ['Houseboat Stay', 'Backwater Cruise', 'Beach Visit'],
      description: 'Cruise through the serene backwaters of Aleppey in a traditional Kerala houseboat.'
    },
    {
      id: 4,
      name: 'Kovalam',
      image: '/assets/kovalam.jpg',
      duration: '3 Days / 2 Nights',
      price: '₹13,999',
      highlights: ['Lighthouse Beach', 'Ayurvedic Spa', 'Water Sports'],
      description: 'Relax on the pristine beaches of Kovalam and enjoy various water activities.'
    }
  ];

  return (
    <div className="packages">
      <div className="packages-head">
        <h1>Most Popular Holiday Packages</h1>
        <p>Experience the best of Kerala with our carefully curated holiday packages</p>
      </div>

      <div className="packages-grid">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <div className="package-image">
              <img src={pkg.image} alt={pkg.name} />
              <div className="package-price">{pkg.price}</div>
            </div>
            <div className="package-content">
              <h3>{pkg.name}</h3>
              <p className="duration">{pkg.duration}</p>
              <p className="description">{pkg.description}</p>
              <div className="highlights">
                <h4>Highlights:</h4>
                <ul>
                  {pkg.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="about-kochi">
        <div className="about-content">
          <h2>About Kochi</h2>
          <p>
            Kochi, also known as Cochin, is a major port city on the south-west coast of India bordering 
            the Laccadive Sea. Known as the Queen of the Arabian Sea, Kochi was an important spice 
            trading centre on the west coast of India from the 14th century onward. Today, it ranks 
            first in the total number of international and domestic tourist arrivals in Kerala.
          </p>
          <button className="learn-more">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Packages;