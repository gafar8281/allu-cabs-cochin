import React, { useEffect, useState } from 'react';
import './PickTaxi.scss';
import { Carousel } from 'react-responsive-carousel';
import { AiOutlineLine } from 'react-icons/ai';
import { FaCar, FaRupeeSign, FaSort } from 'react-icons/fa';

function PickTaxi() {
    const [mobileSlider, setMobileSlider] = useState(false);
    const [sortBy, setSortBy] = useState('default');
    const [filteredVehicles, setFilteredVehicles] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const IMAGES = [
        {
            id: 1,
            src: "/assets/car1.jpg",
            name: "Innova Crista",
            basePrice: 2000,
            baseKm: 100,
            extraKmPrice: 20,
            category: 'premium',
            capacity: 7
        },
        {
            id: 2,
            src: "/assets/car2.jpg",
            name: "Etios",
            basePrice: 1300,
            baseKm: 100,
            extraKmPrice: 13,
            category: 'sedan',
            capacity: 5
        },
        {
            id: 3,
            src: "/assets/car3.jpg",
            name: "Swift Dzire",
            basePrice: 1300,
            baseKm: 100,
            extraKmPrice: 13,
            category: 'sedan',
            capacity: 5
        },
        {
            id: 4,
            src: "/assets/car4.jpg",
            name: "Force Traveller",
            basePrice: 2700,
            baseKm: 100,
            extraKmPrice: 18,
            category: 'traveller',
            capacity: 12
        },
        {
            id: 5,
            src: "/assets/car6.jpg",
            name: "Ertiga",
            basePrice: 1500,
            baseKm: 100,
            extraKmPrice: 15,
            category: 'suv',
            capacity: 7
        },
        {
            id: 6,
            src: "/assets/car7.jpg",
            name: "Innova",
            basePrice: 1700,
            baseKm: 100,
            extraKmPrice: 17,
            category: 'premium',
            capacity: 7
        },
        {
            id: 7,
            src: "/assets/car8.jpg",
            name: "Ford Aspire",
            basePrice: 1300,
            baseKm: 100,
            extraKmPrice: 15,
            category: 'sedan',
            capacity: 5
        },
        {
            id: 8,
            src: "/assets/premiumcar.jpg",
            name: "Premium Cars",
            basePrice: 13500,
            baseKm: 80,
            extraKmPrice: 45,
            category: 'luxury',
            capacity: 4,
            duration: 8
        }
    ];

    useEffect(() => {
        if (window.innerWidth <= 415) {
            setMobileSlider(true);
        } else {
            setMobileSlider(false);
        }

        // Initialize filtered vehicles
        filterAndSortVehicles();
    }, []);

    useEffect(() => {
        filterAndSortVehicles();
    }, [sortBy, selectedCategory]);

    const filterAndSortVehicles = () => {
        let filtered = [...IMAGES];

        // Apply category filter
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(vehicle => vehicle.category === selectedCategory);
        }

        // Apply sorting
        switch (sortBy) {
            case 'price-low':
                filtered.sort((a, b) => a.basePrice - b.basePrice);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.basePrice - a.basePrice);
                break;
            case 'capacity':
                filtered.sort((a, b) => b.capacity - a.capacity);
                break;
            default:
                break;
        }

        setFilteredVehicles(filtered);
    };

    const VehicleCard = ({ vehicle }) => (
        <div className='vehicle-card'>
            <div className='vehicle-image-container'>
                <img src={vehicle.src} loading="lazy" alt={vehicle.name} />
                <div className='vehicle-category'>{vehicle.category}</div>
            </div>
            <div className='vehicle-details'>
                <h3>{vehicle.name}</h3>
                <div className='vehicle-specs'>
                    <span><FaCar /> {vehicle.capacity} Seater</span>
                    <div className='price-details'>
                        <div className='base-price'>
                            <FaRupeeSign />{vehicle.basePrice}
                            <span>First {vehicle.baseKm}KM</span>
                        </div>
                        <div className='extra-price'>
                            +<FaRupeeSign />{vehicle.extraKmPrice}/KM extra
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className='section-picktaxi'>
            <div className='picktaxi-head'>
                <h1>Pick Your Taxi</h1>
                <p>Explore our modern fleet with a large number of options</p>
            </div>

            <div className='filters-section'>
                <div className='category-filters'>
                    <button 
                        className={selectedCategory === 'all' ? 'active' : ''}
                        onClick={() => setSelectedCategory('all')}
                    >
                        All
                    </button>
                    <button 
                        className={selectedCategory === 'sedan' ? 'active' : ''}
                        onClick={() => setSelectedCategory('sedan')}
                    >
                        Sedan
                    </button>
                    <button 
                        className={selectedCategory === 'suv' ? 'active' : ''}
                        onClick={() => setSelectedCategory('suv')}
                    >
                        SUV
                    </button>
                    <button 
                        className={selectedCategory === 'premium' ? 'active' : ''}
                        onClick={() => setSelectedCategory('premium')}
                    >
                        Premium
                    </button>
                    <button 
                        className={selectedCategory === 'luxury' ? 'active' : ''}
                        onClick={() => setSelectedCategory('luxury')}
                    >
                        Luxury
                    </button>
                </div>

                <div className='sort-section'>
                    <select 
                        value={sortBy} 
                        onChange={(e) => setSortBy(e.target.value)}
                        className='sort-select'
                    >
                        <option value="default">Sort By</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="capacity">Capacity</option>
                    </select>
                </div>
            </div>

            <div className='additional-info'>
                <p>Additional Charges: Rs 500 Driver bata per day, Interstate Permit Charges.</p>
            </div>

            {!mobileSlider ? (
                <div className='vehicles-grid'>
                    {filteredVehicles.map(vehicle => (
                        <VehicleCard key={vehicle.id} vehicle={vehicle} />
                    ))}
                </div>
            ) : (
                <div className='vehicles-carousel'>
                    <Carousel
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        swipeable={true}
                        showStatus={false}
                        showArrows={true}
                        showIndicators={true}
                        autoFocus={true}
                        interval={3000}
                    >
                        {filteredVehicles.map(vehicle => (
                            <div key={vehicle.id} className='carousel-slide'>
                                <VehicleCard vehicle={vehicle} />
                            </div>
                        ))}
                    </Carousel>
                </div>
            )}
        </section>
    );
}

export default PickTaxi;