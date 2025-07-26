import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Testimonial.scss';
import { BiUser } from 'react-icons/bi';
// import { FaGoogle } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

function Testimonial() {
  const [slidePercentage, setSlidePercentage] = useState(33.33);

  useEffect(() => {
    const updateSlidePercentage = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setSlidePercentage(100);
      } else if (width <= 1024) {
        setSlidePercentage(50);
      } else {
        setSlidePercentage(33.33);
      }
    };

    // Set initial value
    updateSlidePercentage();

    // Add resize listener
    window.addEventListener('resize', updateSlidePercentage);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateSlidePercentage);
    };
  }, []);

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
    // background: 'transparent',
    borderRadius: '50%',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    // boxShadow: 'none',
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
          centerSlidePercentage={slidePercentage}
          showIndicators={false}
          renderArrowPrev={renderArrowPrev}
          renderArrowNext={renderArrowNext}
          interval={5000}
        >
          <div className='testimonial-card'>
            <div className='testimonial-header'>
              <div className='user-info'>
                <img src="/assets/pavan goda.png" alt="" className="testimonial-user-pic" />
                <div className='user-details'>
                  <h3>pavan goda</h3>
                  <div className='rating'>
                    {[...Array(5)].map((_, index) => (
                      <AiFillStar key={index} className='star-icon' />
                    ))}
                  </div>
                </div>
              </div>
              <div className='google-badge'>
                <img src="/assets/google-logo-icon.png" alt="Google" className="google-logo" />
              </div>
            </div>
            <p className='review-text'>We had a great experience with Unais. We had our journey throughout kerala for 7days with him. He is excellent and more friendly guy. I definitely recommend his services to every traveller who are coming to Kerala. He is supportive. Thanks and looking forward for more.</p>
          </div>

          <div className='testimonial-card'>
            <div className='testimonial-header'>
              <div className='user-info'>
                {/* <img src="/assets/amrita.jpeg" alt="" className="testimonial-user-pic" /> */}
                <BiUser className='testimonial-user' />
                <div className='user-details'>
                  <h3>Monish Kumar</h3>
                  <div className='rating'>
                    {[...Array(5)].map((_, index) => (
                      <AiFillStar key={index} className='star-icon' />
                    ))}
                  </div>
                </div>
              </div>
              <div className='google-badge'>
                <img src="/assets/google-logo-icon.png" alt="Google" className="google-logo" />
              </div>
            </div>
            <p className='review-text'> A very professional service group. I recently hired car for my trip from Kochi to Munnar and back for 4 days. Operator gave personal touch and ensured that i get all comfort in the entire trip. Car quality superb. A very safe driving. Driver very polite and prompt.
            </p>
          </div>

          <div className='testimonial-card'>
            <div className='testimonial-header'>
              <div className='user-info'>
              <BiUser className='testimonial-user' />
                <div className='user-details'>
                  <h3>srujan kumar</h3>
                  <div className='rating'>
                    {[...Array(5)].map((_, index) => (
                      <AiFillStar key={index} className='star-icon' />
                    ))}
                  </div>
                </div>
              </div>
              <div className='google-badge'>
                <img src="/assets/google-logo-icon.png" alt="Google" className="google-logo" />
              </div>
            </div>
            <p className='review-text'>It was an amazing experience with all cab service, especially the driver (Mr Yunus) helped us to cover almost all places in munnar,Alleppey and kochi for a 4 days trip and very polite, friendly. Thank you once again to Allu cabs.</p>
          </div>

          <div className='testimonial-card'>
            <div className='testimonial-header'>
              <div className='user-info'>
                <BiUser className='testimonial-user'/>
                <div className='user-details'>
                  <h3>mubashir Hussain</h3>
                  <div className='rating'>
                    {[...Array(5)].map((_, index) => (
                      <AiFillStar key={index} className='star-icon' />
                    ))}
                  </div>
                </div>
              </div>
              <div className='google-badge'>
                <img src="/assets/google-logo-icon.png" alt="Google" className="google-logo" />
              </div>
            </div>
            <p className='review-text'>Shahab my driver is a professional fellow, highly mannered and expert driver. Calm and composed and at the same time very much focused upon his job.Made my trip to Cochin and munnar worth remembering. Highly recommend</p>
          </div>

          <div className='testimonial-card'>
            <div className='testimonial-header'>
              <div className='user-info'>
                <img src="/assets/Hemant Choudhary.png" alt="" className="testimonial-user-pic" />
                <div className='user-details'>
                  <h3>Hemant Choudhary</h3>
                  <div className='rating'>
                    {[...Array(5)].map((_, index) => (
                      <AiFillStar key={index} className='star-icon' />
                    ))}
                  </div>
                </div>
              </div>
              <div className='google-badge'>
                <img src="/assets/google-logo-icon.png" alt="Google" className="google-logo" />
              </div>
            </div>
            <p className='review-text'>Great services provided by Unais. We are very thankful for his car driving skills and it made our kerla trip very successful.
            </p>
          </div>

          <div className='testimonial-card'>
            <div className='testimonial-header'>
              <div className='user-info'>
                <img src="/assets/Rasif Rasi.png" alt="" className="testimonial-user-pic" />
                <div className='user-details'>
                  <h3>Rasif Rasi</h3>
                  <div className='rating'>
                    {[...Array(5)].map((_, index) => (
                      <AiFillStar key={index} className='star-icon' />
                    ))}
                  </div>
                </div>
              </div>
              <div className='google-badge'>
                <img src="/assets/google-logo-icon.png" alt="Google" className="google-logo" />
              </div>
            </div>
            <p className='review-text'>Excellent Services provided. Booking experience was smooth and easy with Mr. Alhan. Our Chauffer was Mr. Junaid who was always polite, soft spoken and respectful. His driving skills were impeccable and we had a very good holiday in Munnar and Thekkady
            </p>
          </div>

          <div className='testimonial-card'>
            <div className='testimonial-header'>
              <div className='user-info'>
              <img src="/assets/Muhsin Kochu.png" alt="" className="testimonial-user-pic" />
                <div className='user-details'>
                  <h3>Muhsin Kochu</h3>
                  <div className='rating'>
                    {[...Array(5)].map((_, index) => (
                      <AiFillStar key={index} className='star-icon' />
                    ))}
                  </div>
                </div>
              </div>
              <div className='google-badge'>
                <img src="/assets/google-logo-icon.png" alt="Google" className="google-logo" />
              </div>
            </div>
            <p className='review-text'>Nice service. Innocent and genuine persons ..I like..</p>
          </div>

          <div className='testimonial-card'>
            <div className='testimonial-header'>
              <div className='user-info'>
              <img src="/assets/jyotiranjan satapathy.png" alt="" className="testimonial-user-pic" />
                <div className='user-details'>
                  <h3>jyotiranjan satapathy</h3>
                  <div className='rating'>
                    {[...Array(5)].map((_, index) => (
                      <AiFillStar key={index} className='star-icon' />
                    ))}
                  </div>
                </div>
              </div>
              <div className='google-badge'>
                <img src="/assets/google-logo-icon.png" alt="Google" className="google-logo" />
              </div>
            </div>
            <p className='review-text'>Excellent cab services. Vehicles are well maintained and clean. My chauffeur Mr Sunil parekattu was polite enough for me to consider him as my chauffeur for my future tour</p>
          </div>

          <div className='testimonial-card'>
            <div className='testimonial-header'>
              <div className='user-info'>
              <img src="/assets/Dr. Ratul Maji.png" alt="" className="testimonial-user-pic" />
                <div className='user-details'>
                  <h3>Dr. Ratul Maji</h3>
                  <div className='rating'>
                    {[...Array(5)].map((_, index) => (
                      <AiFillStar key={index} className='star-icon' />
                    ))}
                  </div>
                </div>
              </div>
              <div className='google-badge'>
                <img src="/assets/google-logo-icon.png" alt="Google" className="google-logo" />
              </div>
            </div>
            <p className='review-text'>Amazing service by Mr. Sakeer. Highly recommended.</p>
          </div>

          <div className='testimonial-card'>
            <div className='testimonial-header'>
              <div className='user-info'>
              <BiUser className='testimonial-user'/>
                <div className='user-details'>
                  <h3>Vinil Simson</h3>
                  <div className='rating'>
                    {[...Array(5)].map((_, index) => (
                      <AiFillStar key={index} className='star-icon' />
                    ))}
                  </div>
                </div>
              </div>
              <div className='google-badge'>
                <img src="/assets/google-logo-icon.png" alt="Google" className="google-logo" />
              </div>
            </div>
            <p className='review-text'>We hired the taxi services for a week during our Kerala  trip. The vehicle provided was a good one and our driver yonus   was very helpful and a reliable person.highly recommended…👌🏻 …</p>
          </div>

          <div className='testimonial-card'>
            <div className='testimonial-header'>
              <div className='user-info'>
              <img src="/assets/Abel Rock.png" alt="" className="testimonial-user-pic" />
                <div className='user-details'>
                  <h3>Abel Rock</h3>
                  <div className='rating'>
                    {[...Array(5)].map((_, index) => (
                      <AiFillStar key={index} className='star-icon' />
                    ))}
                  </div>
                </div>
              </div>
              <div className='google-badge'>
                <img src="/assets/google-logo-icon.png" alt="Google" className="google-logo" />
              </div>
            </div>
            <p className='review-text'>We 4 persons travelled from Ernakulam junction to Munnar. Our driver picked us on time and he knew multiple languages,so he was able to communicate with us without any issue. From reaching hotel to sightseeing and dropping back to Ernakulam junction it was smooth experience. Thanks for the great experience and i highly recommend Allu cabs Cochin for their exceptional service.</p>
          </div>

          <div className='testimonial-card'>
            <div className='testimonial-header'>
              <div className='user-info'>
              <img src="/assets/Arshik Ali.png" alt="" className="testimonial-user-pic" />
                <div className='user-details'>
                  <h3>Arshik Ali</h3>
                  <div className='rating'>
                    {[...Array(5)].map((_, index) => (
                      <AiFillStar key={index} className='star-icon' />
                    ))}
                  </div>
                </div>
              </div>
              <div className='google-badge'>
                <img src="/assets/google-logo-icon.png" alt="Google" className="google-logo" />
              </div>
            </div>
            <p className='review-text'>The cabs provided were in good condition. Communication was good. The drivers always reached on time, were polite and drove safely. Reasonably priced. In a gist, it was a good experience renting Allu Cabs instead of exorbitant transfers provided by hotels.</p>
          </div>

          <div className='testimonial-card'>
            <div className='testimonial-header'>
              <div className='user-info'>
              <img src="/assets/Sreelekshmi K.U.png" alt="" className="testimonial-user-pic" />
                <div className='user-details'>
                  <h3>Sreelekshmi K.U</h3>
                  <div className='rating'>
                    {[...Array(5)].map((_, index) => (
                      <AiFillStar key={index} className='star-icon' />
                    ))}
                  </div>
                </div>
              </div>
              <div className='google-badge'>
                <img src="/assets/google-logo-icon.png" alt="Google" className="google-logo" />
              </div>
            </div>
            <p className='review-text'>Most memorable moment with my hubby.. we enjoyed each nd every time</p>
          </div>

          <div className='testimonial-card'>
            <div className='testimonial-header'>
              <div className='user-info'>
              <img src="/assets/Chithralekha Bhaskaran.png" alt="" className="testimonial-user-pic" />
                <div className='user-details'>
                  <h3>Chithralekha Bhaskaran</h3>
                  <div className='rating'>
                    {[...Array(5)].map((_, index) => (
                      <AiFillStar key={index} className='star-icon' />
                    ))}
                  </div>
                </div>
              </div>
              <div className='google-badge'>
                <img src="/assets/google-logo-icon.png" alt="Google" className="google-logo" />
              </div>
            </div>
            <p className='review-text'>Toooo enjoyable nd good nd cleaned atmosphere</p>
          </div>

          <div className='testimonial-card'>
            <div className='testimonial-header'>
              <div className='user-info'>
              <img src="/assets/Thasni.png" alt="" className="testimonial-user-pic" />
                <div className='user-details'>
                  <h3>Thasni</h3>
                  <div className='rating'>
                    {[...Array(5)].map((_, index) => (
                      <AiFillStar key={index} className='star-icon' />
                    ))}
                  </div>
                </div>
              </div>
              <div className='google-badge'>
                <img src="/assets/google-logo-icon.png" alt="Google" className="google-logo" />
              </div>
            </div>
            <p className='review-text'>Very memorable moments. Helpful and courteous. Highly recommended. All things went really smooth. Thanks for allu cabs</p>
          </div>

          <div className='testimonial-card'>
            <div className='testimonial-header'>
              <div className='user-info'>
              <img src="/assets/Unni Prema.png" alt="" className="testimonial-user-pic" />
                <div className='user-details'>
                  <h3>Unni Prema</h3>
                  <div className='rating'>
                    {[...Array(5)].map((_, index) => (
                      <AiFillStar key={index} className='star-icon' />
                    ))}
                  </div>
                </div>
              </div>
              <div className='google-badge'>
                <img src="/assets/google-logo-icon.png" alt="Google" className="google-logo" />
              </div>
            </div>
            <p className='review-text'>This is first time am using Allu cabs. It was really amazing experience. Vehicle was on time, driver Libin very nice personality with safe diving. Rate is very good to compare others</p>
          </div>

          <div className='testimonial-card'>
            <div className='testimonial-header'>
              <div className='user-info'>
              <img src="/assets/ANAGHA m.png" alt="" className="testimonial-user-pic" />
                <div className='user-details'>
                  <h3>ANAGHA m</h3>
                  <div className='rating'>
                    {[...Array(5)].map((_, index) => (
                      <AiFillStar key={index} className='star-icon' />
                    ))}
                  </div>
                </div>
              </div>
              <div className='google-badge'>
                <img src="/assets/google-logo-icon.png" alt="Google" className="google-logo" />
              </div>
            </div>
            <p className='review-text'>Moindeen gave a great experience for our kerala trip..very professional and has knowledge of all places</p>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonial;

