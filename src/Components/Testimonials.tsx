import React from 'react';
import img1 from '../Assests/contact-bg.png';
import Footer from './Footer';


const testimonials = [
    {
        id: 1,
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
        name: 'Tapsi',
        quote: 'Renting a car from this website was fantastic! The process was so easy, and the rates were very reasonable. I had a smooth experience overall.'
    },
    {
        id: 2,
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        name: 'Vijay Reddy',
        quote: 'Our car rental experience was top-notch! Booking online was quick, and the rental rates were budget-friendly. Everything went smoothly during our trip.'

    },
    {
        id: 3,
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
        name: 'Keshav',
        quote: 'Highly satisfied with my car rental! The website made it easy to book, and the prices were very competitive. I will be using this service again for sure.'
    },
    {
        id: 4,
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        name: 'Rashmika',
        quote: 'Had a great time renting a car here! The booking was a breeze, and the prices were affordable. Would definitely recommend to others.'

    }
]

const Testimonials = () => {
  return (
    <>
    <div className="container mx-auto px-2 py-20">
      <h1 className="text-2xl font-semibold mb-4 text-black">Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="border p-4 rounded-md">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mb-4 mx-auto"
            />
            <p className="text-center mb-10 text-black">{testimonial.quote}</p>
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
