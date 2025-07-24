import React, { useState } from 'react';
import './Packages.scss';

function Packages() {
  const [activeQuestion, setActiveQuestion] = useState(null);

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

  const faqs = [
    {
      id: 1,
      question: "What's included in the package price?",
      answer: "Our package prices typically include accommodation, transportation, guided tours, and some meals. Specific inclusions vary by package and are detailed in the package description."
    },
    {
      id: 2,
      question: "Can I customize these packages?",
      answer: "Yes! All our packages can be customized to meet your specific needs. Contact our team for personalized modifications to any package."
    },
    {
      id: 3,
      question: "What's the best time to visit Kerala?",
      answer: "The best time to visit Kerala is between October and February when the weather is pleasant. However, each season offers its own unique experiences."
    },
    {
      id: 4,
      question: "How do I book a package?",
      answer: "You can book a package by contacting our team through phone, email, or the contact form on our website. We'll guide you through the booking process."
    }
  ];

  const toggleQuestion = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

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

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-item">
              <div 
                className={`faq-question ${activeQuestion === faq.id ? 'active' : ''}`}
                onClick={() => toggleQuestion(faq.id)}
              >
                {faq.question}
                <span className="faq-icon">{activeQuestion === faq.id ? '−' : '+'}</span>
              </div>
              <div className={`faq-answer ${activeQuestion === faq.id ? 'active' : ''}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Packages;