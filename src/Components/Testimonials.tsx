import React from 'react';
import img1 from '../Assests/contact-bg.png';
import Footer from './Footer';
import Navbar from './Navbar';


// interface Ratings {
//   id: number;
//   image: string;
//   name: string;
//   quote: string;
//   rating: number;
// }
const testimonials = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    name: 'Tapsi',
    quote: 'Just received my new AirPods, and they are amazing! The sound quality is exceptional, and they fit perfectly. Totally worth it!',
    rating: 5
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    name: 'Vijay Reddy',
    quote: 'Bought a new Bluetooth speaker, and I\'m impressed! The sound is crystal clear, and the design is sleek. Loving it!',
    rating: 4
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
    name: 'Keshav',
    quote: 'Got my new headphones today, and they\'re fantastic! The noise cancellation is top-notch, and they\'re so comfortable to wear.',
    rating: 5
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    name: 'Rashmika',
    quote: 'Purchased a smartwatch and I\'m loving it! The features are amazing, and it helps me stay organized throughout the day.',
    rating: 5
  },
  {
    id: 5,
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    name: 'Rashmika',
    quote: 'Ordered a new laptop, and it exceeded my expectations! The performance is blazing fast, and the display is stunning.',
    rating: 4
  },
  {
    id: 6,
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    name: 'Rashmika',
    quote: 'Bought a gaming console and it\'s awesome! The graphics are incredible, and the gaming experience is immersive.',
    rating: 3
  },
  {
    id: 7,
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    name: 'Rashmika',
    quote: 'Got myself a new camera, and I\'m amazed by the picture quality! Capturing memories has never been this clear and vibrant.',
    rating: 4
  },
  {
    id: 8,
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    name: 'Rashmika',
    quote: 'Ordered a new tablet and it\'s fantastic! The screen is crisp, and it\'s perfect for both work and entertainment.',
    rating: 4
  },
  {
    id: 9,
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    name: 'Rashmika',
    quote: 'Purchased a fitness tracker and it\'s helping me stay on top of my health goals! The features are motivating and easy to use.',
    rating: 5
  },
  {
    id: 10,
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    name: 'Rashmika',
    quote: 'Got a new portable charger and it\'s a lifesaver! It keeps my devices charged on the go, and it\'s so convenient to carry.',
    rating: 4
  }
]


const Testimonials = () => {
  return (
    <>
    <Navbar/>
    <div className="mt-40 text-center">
      <h1 className="text-2xl font-semibold mb-4 text-black">Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="border p-4 rounded-md hover:shadow-lg">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mb-4 mx-auto"
            />
            <p className="text-center mb-2 text-black">{testimonial.quote}</p>
            <div className="text-center mb-4">
                {Array.from({ length: 5 }, (_rating, index) => (
                  <span key={index} className={index < testimonial.rating ? "text-yellow-500" : "text-gray-400"}>&#9733;</span>
                ))}
            </div>
            
            <p className="text-center font-semibold text-black">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Testimonials;
