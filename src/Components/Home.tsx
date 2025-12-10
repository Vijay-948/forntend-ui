// import { Widgets } from "@mui/icons-material";
// import Navbar from "./Navbar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useCallback, useEffect, useState } from "react";
import About from "./About";
import { useNavigate } from "react-router-dom";
import { Tilt } from "react-tilt";
// import Testimonials from "./Testimonials";
// import { testimonials } from "./Testimonials";
import "../App.css";
import { toast } from "react-toastify";

const slides = [
  {
    id: 1,
    name: "boAt Rockerz 551",
    description:
      "The boAt Rockerz 551 headphones offer immersive audio, powerful bass, and clear highs for enjoyable listening. With a comfortable design and long battery life, they're ideal for workouts, commutes, or leisurely sessions.",
    imgUrl:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/i/6/z/-original-imagznsrxuseynhy.jpeg",
  },
  {
    id: 2,
    name: "lezzie E88 Drone",
    description:
      "The Lezzie E88 Drone combines advanced features with user-friendly design for an exhilarating flying experience. With its stable flight performance and HD camera capabilities, capturing stunning aerial footage is effortless.",
    imgUrl:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/drone/x/o/i/80-20-0-e88-drone-wifi-camera-drone-remote-control-quadcopter-original-imagqgvyshgcrhzk.jpeg",
  },
  {
    id: 3,
    name: "JBL Boombox",
    description:
      "The JBL Boombox is a powerhouse portable speaker, delivering thunderous bass and crisp highs for an immersive listening experience. With its rugged design and long-lasting battery, it's the perfect companion for outdoor adventures and parties alike.",
    imgUrl:
      "https://rukminim2.flixcart.com/image/416/416/k3ncakw0pkrrdj/speaker/home-audio-speaker/q/5/8/jbl-boomboxblkeu-original-imafj9zgyenpy2rt.jpeg",
  },
  {
    id: 4,
    name: "Titan Analog Wall Clock",
    description:
      "The Titan Analog Wall Clock combines timeless elegance with precision timekeeping, adding a touch of sophistication to any room decor. Its classic design and reliable mechanism make it a stylish and functional addition to your home or office.",
    imgUrl:
      "https://rukminim2.flixcart.com/image/416/416/jy7kyvk0/wall-clock/j/c/h/wall-clock-w0033wa01-analog-titan-original-imafggbrxdupsfxq.jpeg",
  },
];

const testimonials = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    name: "chandana",
    quote:
      "Just received my new AirPods, and they are amazing! The sound quality is exceptional, and they fit perfectly. Totally worth it!",
    rating: 5,
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    name: "Vijay Reddy",
    quote:
      "Bought a new Bluetooth speaker, and I'm impressed! The sound is crystal clear, and the design is sleek. Loving it!",
    rating: 4,
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",
    name: "Keshav",
    quote:
      "Got my new headphones today, and they're fantastic! The noise cancellation is top-notch, and they're so comfortable to wear.",
    rating: 5,
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    name: "Anjali",
    quote:
      "Purchased a smartwatch and I'm loving it! The features are amazing, and it helps me stay organized throughout the day.",
    rating: 5,
  },
  {
    id: 5,
    image:
      "https://winningfaces.com.au/wp-content/gallery/headshots2018/headshot-08.jpg",
    name: "kavya",
    quote:
      "Ordered a new laptop, and it exceeded my expectations! The performance is blazing fast, and the display is stunning.",
    rating: 4,
  },
];

const Home = () => {
  const [currIndx, setCurrIndx] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  console.log(testimonialIndex);
  const navigate = useNavigate();
  const handleProtectedClick = (path: any) => {
    if (!token) {
      toast.warning("Please Sign In or Sign Up to view details!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    navigate(path);
  };

  // const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const prevSlide = () => {
    const isFirstSlide = currIndx === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currIndx - 1;
    setCurrIndx(newIndex);
  };

  const nextSlide = useCallback(() => {
    setCurrIndx((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const goToSlide = (slideIndex: any) => {
    setCurrIndx(slideIndex - 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((testimonialIndex) =>
        testimonialIndex === testimonials.length - 1 ? 0 : testimonialIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     navigate("/login");
  //   }
  // }, [navigate]);

  return (
    <>
      <div className="max-w-[1500px] h-auto w-full m-auto py-10 px-4 relative flex flex-col justify-around items-center mt-40 rounded-md gap-15">
        <div className="flex w-full justify-between items-center">
          <ArrowBackIosNewIcon
            onClick={prevSlide}
            className="text-9xl cursor-pointer text-gray-900 rounded-full"
          />
          <div className="flex w-1/2 flex-col justify-center px-10">
            <div className="text-3xl font-bold mb-4 text-gray-500">
              {slides[currIndx].name}
            </div>
            <div className="text-lg mb-8 text-blue-600">
              {slides[currIndx].description}
            </div>
          </div>

          <div className="w-1/4 relative">
            <div className="w-full h-full flex items-center justify-center">
              <Tilt>
                <img
                  src={slides[currIndx].imgUrl}
                  alt={slides[currIndx].name}
                  className="w-96 h-120 object-cover rounded-2xl"
                />
              </Tilt>
            </div>
          </div>
          <ArrowForwardIosIcon
            onClick={nextSlide}
            className="text-2xl cursor-pointer text-gray-600"
          />
        </div>
        <div className="flex justify-center mt-4">
          {slides.map((slide, slideIndex) => (
            <div
              key={slide.id}
              onClick={() => goToSlide(slide.id)}
              className={`text-2xl cursor-pointer ${
                slideIndex === currIndx ? "text-blue-500" : "text-gray-500"
              }`}
            >
              <FiberManualRecordIcon />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center mt-6">
        <button
          className="text-center bg-blue-600 text-white px-6 py-2 rounded-md"
          onClick={() => handleProtectedClick("/products")}
        >
          View More Products
        </button>
      </div>

      <div className="text-center mb-10 mt-10">
        <p className="text-xl font-semibold text-gray-800">
          Thousands of customers are delighted with their purchases.
        </p>
        <p className="text-lg text-gray-600 mt-4">
          They enjoy premium quality and a seamless shopping experience. Their
          satisfaction motivates us to serve even better.
        </p>
      </div>

      <div className="w-full overflow-hidden mt-20">
        <div className="flex slider-track w-[200%]">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="border p-6 bg-white rounded-xl shadow-lg w-[300px] mx-4 flex-shrink-0"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
              />

              <p className="text-gray-700 mb-3 text-center">"{item.quote}"</p>

              <div className="mb-3 text-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < item.rating ? "text-yellow-500" : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="font-semibold text-black text-center">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col items-center mt-8">
          <button
            onClick={() => handleProtectedClick("/testmonials")}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            View More
          </button>
        </div>
      </div>

      <About />
    </>
  );
};

export default Home;
