import React from 'react';
import './Services.scss';

function Services() {
  return (
    <section className='section-services'>
        <div className='services-head'><h1>Our Services</h1></div>
        <div className='services-collection'>

            <div className='card'>
                <div className='card-img'>
                    <img src="/assets/airport.jpg" alt="" />
                </div>
                <div className='card-desc'>
                    <h1>Airport Pickup</h1>
                    <h4>Someone coming from abroad ? Well, we are there to safely take you to your destination. Sit back, Relax and Enjoy. No worries :)</h4>
                </div>
                <div className='card-more'>
                    <button>Know More</button>
                </div>
            </div>

            <div className='card'>
                <div className='card-img'>
                    <img src="/assets/taxi.jpg" alt="" />
                </div>
                <div className='card-desc'>
                    <h1>Book Your Taxi</h1>
                    <h4>Allu Cabs Cochin knows what their client expect and deserve, so all customers are treated with royalty. Our taxi rates are really affordable worth the money.</h4>
                </div>
                <div className='card-more'>
                    <button>Know More</button>
                </div>
            </div>    

            <div className='card'>
                <div className='card-img'>
                <img src="/assets/holiday.jpg" alt="" />
                </div>
                <div className='card-desc'>
                    <h1>Holiday Packages</h1>
                    <h4>We offer you exclusive Kerala Holiday Packages that will gift you and your family with a thrilling Kerala experience. We know the best places for chilling !</h4>
                </div>
                <div className='card-more'>
                    <button>Know More</button>
                </div>
            </div> 

            <div className='card'>
                <div className='card-img'>
                    <img src="/assets/honeymoon.jpg" alt="" />
                </div>
                <div className='card-desc'>
                    <h1>Honeymoon Packages</h1>
                    <h4>We are dealing with Wedding Car Rental Services at reasonable price. With an objective to fulfill the demands of our clients.</h4>
                </div>
                <div className='card-more'>
                    <button>Know More</button>
                </div>
            </div>

            <div className='card'>
                <div className='card-img'>
                    <img src="/assets/boat.jpg" alt="" />
                </div>
                <div className='card-desc'>
                    <h1>Boating Packages</h1>
                    <h4>Well, we operate our services on water too. How cool is that? Enjoy the beauty of Kerala on a boat ride and let this joy fill your heart.❤️</h4>
                </div>
                <div className='card-more'>
                    <button>Know More</button>
                </div>
            </div>


        </div>           
    </section>
  )
}

export default Services