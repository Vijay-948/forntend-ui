import { Widgets } from "@mui/icons-material";
import Navbar from "./Navbar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useEffect, useState } from "react";
import About from "./About";
import { useNavigate } from "react-router-dom";
import { Tilt } from "react-tilt";

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

const Home = () => {
  const [currIndx, setCurrIndx] = useState(0);
  const navigate = useNavigate();

  const prevSlide = () => {
    const isFirstSlide = currIndx === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currIndx - 1;
    setCurrIndx(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currIndx === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currIndx + 1;
    setCurrIndx(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrIndx(slideIndex - 1);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="max-w-[1500px] h-auto w-full m-auto py-16 px-4 relative flex flex-col justify-around items-center mt-40 rounded-md gap-15">
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
      <About />
    </>
  );
};

export default Home;
