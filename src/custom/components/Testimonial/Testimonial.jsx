import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Testimonial.scss';
import { BiUser } from 'react-icons/bi';
// import { FaGoogle } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

function Testimonial() {
  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 20px)',
    width: 40,
    height: 40,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
    borderRadius: '50%',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease'
  };

  const renderArrowPrev = (clickHandler) => (
    <div 
      className="arrow-button prev"
      onClick={clickHandler}
      style={{ ...arrowStyles, left: 10 }}
    >
      <MdKeyboardArrowLeft size={24} />
    </div>
  );

  const renderArrowNext = (clickHandler) => (
    <div 
      className="arrow-button next"
      onClick={clickHandler}
      style={{ ...arrowStyles, right: 10 }}
    >
      <MdKeyboardArrowRight size={24} />
    </div>
  );

  return (
    <section className='testimonial'>
      <div className='testimonial-head'>
        <h1>What Our Guests Say</h1>
      </div>
      <div className='testimonial-carousel-container'>
        <Carousel
          className='testimonial-carousel'
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          swipeable={true}
          emulateTouch={true}
          showStatus={false}
          showArrows={true}
          autoFocus={true}
          centerMode={true}
          centerSlidePercentage={window.innerWidth <= 768 ? 100 : window.innerWidth <= 1024 ? 50 : 33.33}
          showIndicators={false}
          renderArrowPrev={renderArrowPrev}
          renderArrowNext={renderArrowNext}
          interval={5000}
        >
          <div className='testimonial-card'>
            <div className='testimonial-header'>
              <div className='user-info'>
                <img src="/assets/libin.jpeg" alt="" className="testimonial-user-pic" />
                <div className='user-details'>
                  <h3>Libin K Varkey</h3>
                  {/* <div className='google-badge'> */}
                    {/* <FaGoogle className='google-icon' /> */}
                  {/* </div> */}
                </div>
              </div>
              <div className='rating'>
                {[...Array(5)].map((_, index) => (
                  <AiFillStar key={index} className='star-icon' />
                ))}
              </div>
            </div>
            <p className='review-text'>It was a different experience altogether with Allu Cabs. Very friendly driver and neat driving. Strongly recommending Allu Cabs!</p>
          </div>

          <div className='testimonial-card'>
            <div className='testimonial-header'>
              <div className='user-info'>
                <img src="/assets/amrita.jpeg" alt="" className="testimonial-user-pic" />
                <div className='user-details'>
                  <h3>Amrita</h3>
                </div>
              </div>
              <div className='rating'>
                {[...Array(5)].map((_, index) => (
                  <AiFillStar key={index} className='star-icon' />
                ))}
              </div>
            </div>
            <p className='review-text'>Service has been excellent! The driver was very polite, professional as well as very accommodating. Also the fare was reasonable.</p>
          </div>

          <div className='testimonial-card'>
            <div className='testimonial-header'>
              <div className='user-info'>
                <img src="/assets/unaise.jpeg" alt="" className="testimonial-user-pic" />
                <div className='user-details'>
                  <h3>Unaise</h3>
                </div>
              </div>
              <div className='rating'>
                {[...Array(5)].map((_, index) => (
                  <AiFillStar key={index} className='star-icon' />
                ))}
              </div>
            </div>
            <p className='review-text'>Roaming around in Kerala with Allu Cabs is not only a wonderful, but also an affordable experience. Just want to give a shoutout to my driver - Ramesh Nair</p>
          </div>

          <div className='testimonial-card'>
            <div className='testimonial-header'>
              <div className='user-info'>
                <img src="/assets/mamitha.jpeg" alt="" className="testimonial-user-pic" />
                <div className='user-details'>
                  <h3>Mamitha</h3>
                </div>
              </div>
              <div className='rating'>
                {[...Array(5)].map((_, index) => (
                  <AiFillStar key={index} className='star-icon' />
                ))}
              </div>
            </div>
            <p className='review-text'>Awesome service! Professional dealing. Highly Recommending!</p>
          </div>

          <div className='testimonial-card'>
            <div className='testimonial-header'>
              <div className='user-info'>
                <img src="/assets/shahana.jpeg" alt="" className="testimonial-user-pic" />
                <div className='user-details'>
                  <h3>Shahana</h3>
                </div>
              </div>
              <div className='rating'>
                {[...Array(5)].map((_, index) => (
                  <AiFillStar key={index} className='star-icon' />
                ))}
              </div>
            </div>
            <p className='review-text'>Very good experience. Forgot my wallet in the cab...Allu cabs reached out to me, they brought it to my place. Appreciated!</p>
          </div>

          <div className='testimonial-card'>
            <div className='testimonial-header'>
              <div className='user-info'>
                <img src="/assets/prasad.jpeg" alt="" className="testimonial-user-pic" />
                <div className='user-details'>
                  <h3>Prasad</h3>
                </div>
              </div>
              <div className='rating'>
                {[...Array(5)].map((_, index) => (
                  <AiFillStar key={index} className='star-icon' />
                ))}
              </div>
            </div>
            <p className='review-text'>This is a one stop place for cabs. Highly recommending it! Give it a go!</p>
          </div>

          <div className='testimonial-card'>
            <div className='testimonial-header'>
              <div className='user-info'>
                <BiUser className='testimonial-user' />
                <div className='user-details'>
                  <h3>Sneha P</h3>
                </div>
              </div>
              <div className='rating'>
                {[...Array(5)].map((_, index) => (
                  <AiFillStar key={index} className='star-icon' />
                ))}
              </div>
            </div>
            <p className='review-text'>ആദ്യ യാത്രയിൽ തന്നെ മികച്ച സ്വീകാര്യത നേടിയെടുക്കാനും. മികച്ച സുരക്ഷാ സംവിധാനങ്ങളാലും പ്രീമിയം മോടിഫിക്കേഷൻസുകളാലും കുറഞ്ഞ കാലം കൊണ്ട് കൂടുതൽ ഉപഭോക്താക്കളെ നേടിയെടുക്കാനും കഴിഞ്ഞു എന്നതിൽ അത്ഭുതം ഏതുമില്ല...യാത്രക്കാർക്കിതൊരു വേറിട്ട അനുഭവം തന്നെയായിരിക്കും...</p>
          </div>

          <div className='testimonial-card'>
            <div className='testimonial-header'>
              <div className='user-info'>
                <BiUser className='testimonial-user' />
                <div className='user-details'>
                  <h3>Adwaith KS</h3>
                </div>
              </div>
              <div className='rating'>
                {[...Array(5)].map((_, index) => (
                  <AiFillStar key={index} className='star-icon' />
                ))}
              </div>
            </div>
            <p className='review-text'>Finest Service. Best in Class!</p>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonial;