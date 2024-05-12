import { Widgets } from "@mui/icons-material";
import Navbar from "./Navbar";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useState } from "react";
import About from "./About";

const slides = [
  {
    id: 1,
    name: "boAt Rockerz 551",
    description: "The boAt Rockerz 551 headphones offer immersive audio, powerful bass, and clear highs for enjoyable listening. With a comfortable design and long battery life, they're ideal for workouts, commutes, or leisurely sessions.",
    imgUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/i/6/z/-original-imagznsrxuseynhy.jpeg"
  },
  {
    id: 2,
    name:"lezzie E88 Drone",
    description: "The Lezzie E88 Drone combines advanced features with user-friendly design for an exhilarating flying experience. With its stable flight performance and HD camera capabilities, capturing stunning aerial footage is effortless.",
    imgUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/drone/x/o/i/80-20-0-e88-drone-wifi-camera-drone-remote-control-quadcopter-original-imagqgvyshgcrhzk.jpeg"
  },
  {
    id: 3,
    name: "JBL Boombox",
    description: "The JBL Boombox is a powerhouse portable speaker, delivering thunderous bass and crisp highs for an immersive listening experience. With its rugged design and long-lasting battery, it's the perfect companion for outdoor adventures and parties alike.",
    imgUrl: "https://rukminim2.flixcart.com/image/416/416/k3ncakw0pkrrdj/speaker/home-audio-speaker/q/5/8/jbl-boomboxblkeu-original-imafj9zgyenpy2rt.jpeg"
  },
  {
    id: 4,
    name: "Titan Analog Wall Clock",
    description: "The Titan Analog Wall Clock combines timeless elegance with precision timekeeping, adding a touch of sophistication to any room decor. Its classic design and reliable mechanism make it a stylish and functional addition to your home or office.",
    imgUrl: "https://rukminim2.flixcart.com/image/416/416/jy7kyvk0/wall-clock/j/c/h/wall-clock-w0033wa01-analog-titan-original-imafggbrxdupsfxq.jpeg"
  }

]

const Home = () => {
  const [currIndx, setCurrIndx] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currIndx === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currIndx - 1;
    setCurrIndx(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currIndx === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currIndx + 1;
    setCurrIndx(newIndex);
  }

  const goToSlide = (slideIndex: any) => {
    setCurrIndx(slideIndex);
  }


  return(
    <>
    <Navbar />
    <div className="max-w-[1500px] h-[780px] w-full m-auto py-16 px-4 relative group flex mt-40 rounded-md gap-15">
      <div className="w-1/2 flex flex-col justify-center">
        <div className="text-3xl font-bold mb-4 text-gray-500">{slides[currIndx].name}</div>
        <div className="text-lg mb-8 text-blue-900">{slides[currIndx].description}</div>
      </div>

      <div className="w-1/2 relative">
        <div className="w-full h-full rounded-2xl bg-center bg-no-repeat duration-500"
            style={{backgroundImage: `url(${slides[currIndx].imgUrl})`}}>
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursoir-pointer text-blue-600">
          <ArrowBackIosNewIcon onClick={prevSlide} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursoir-pointer text-blue-600">
          <ArrowForwardIosIcon onClick={nextSlide} />
        </div>
      </div>
      <div className="flex top-4 justify-center">
          {slides.map((slide) => (
            <div
               key={slide.id}
               onClick={() => goToSlide(slide.id)}
               className={`text-2xl cursor-pointer ${slide.id === currIndx ? 'text-blue-500' : 'text-red-500'}`}
            >
              <FiberManualRecordIcon />
            </div>
          ))}
        </div>
    </div>
    <About />

    </>
  )

}

export default Home;