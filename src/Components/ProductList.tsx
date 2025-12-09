import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const productList = [
  {
    id: 1,
    productImg:
      "https://rukminim2.flixcart.com/flap/210/210/image/24ed491dc3ff9e8a.jpg?q=80",
    productName: "Noise SmartWatches",
    price: "1400",
    description:
      "A stylish smartwatch with fitness tracking and notifications.",
  },
  {
    id: 2,
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/f/b/5/-original-imagyxxfgx2zhnbt.jpeg?q=70",
    productName: "boAt Ultima Prism",
    price: "2,499",
    description: "Feature-packed smartwatch with long battery life.",
  },
  {
    id: 3,
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/v/8/r/-original-imagy97z4qgjheyn.jpeg?q=70",
    productName: "boAt Wave Fury ",
    price: "1999",
    description: "Lightweight smartwatch with music and fitness control.",
  },
  {
    id: 4,
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/q/q/n/-original-imagmugg8hx9v5fr.jpeg?q=70",
    productName: "BOULT",
    price: "1299",
    description: "High-quality wireless headphones with clear sound.",
  },
  {
    id: 5,
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/i/6/z/-original-imagznsrxuseynhy.jpeg?q=70",
    productName: "boAt Rockerz 551",
    price: "2000",
    description: "Wireless headphones with rich bass and long battery life.",
  },
  {
    id: 6,
    productImg:
      "https://rukminim2.flixcart.com/image/416/416/k3ncakw0pkrrdj/speaker/home-audio-speaker/q/5/8/jbl-boomboxblkeu-original-imafj9zgyenpy2rt.jpeg",
    productName: "JBL Boombox",
    price: "26999",
    description:
      "Powerful portable speaker with deep bass and waterproof design.",
  },
  {
    id: 7,
    productImg:
      "https://rukminim2.flixcart.com/image/832/832/klv7ekw0/backpack/e/b/7/hammer-057-black-laptop-backpack-heroz-original-imagyw6e8hverpnh.jpeg?q=70&crop=false",
    productName: "HEROZ ",
    price: "1499",
    description:
      "Durable laptop backpack with multiple compartments and stylish design.",
  },
  {
    id: 8,
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/v/l/e/-original-imagqkhfgxbnyw9w.jpeg?q=70",
    productName: "JBL Tune Buds Active",
    price: "5099",
    description:
      "True wireless earbuds with active noise cancellation and clear sound.",
  },
  {
    id: 9,
    productImg:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/rucksack/l/i/m/90l-internal-frame-travel-backpack-with-detachable-daypack-original-imahyaepzyurefgy.jpeg?q=70&crop=false",
    productName: "TRAWOC",
    price: "3599",
    description:
      "Large travel backpack with detachable daypack and ergonomic design.",
  },
  {
    id: 10,
    productImg:
      "https://rukminim2.flixcart.com/image/416/416/l1grgcw0/skateboard/d/0/5/blood-lust-complete-maple-wood-double-kick-fully-assembled-31-original-imagdfybaxgubgay.jpeg?q=70&crop=false",
    productName: "Jaspo Blood Skateboard",
    price: "3389",
    description:
      "Durable maple wood skateboard with smooth double kick for tricks.",
  },
  {
    id: 11,
    productImg:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/hand-messenger-bag/d/1/x/formal-hand-sling-bag-hb-600-hand-held-bag-exotic-original-imaghaubg9j9ggah.jpeg?q=70&crop=false",
    productName: "Exotic",
    price: "1299",
    description:
      "Elegant formal hand sling bag suitable for office and casual use.",
  },
  {
    id: 12,
    productImg:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/table-lamp/u/p/z/desk-lamp-for-study-with-3-shades-touch-control-light-and-mobile-original-imagkfgbs7wehwnz.jpeg?q=70&crop=false",
    productName: "iDOLESHOP Desk Lamp",
    price: "499",
    description:
      "Adjustable desk lamp with 3 brightness levels and touch control.",
  },
  {
    id: 13,
    productImg:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/n/m/g/-original-imagz3zg3xmqhr2z.jpeg?q=70",
    productName: "Fastrack",
    price: "5199",
    descrption:
      "Fastrack All Nighter Multifunction Black Dial Brown LeatherStrap Analog Watch - For Men NT3165NL01",
  },
  {
    id: 14,
    productImg:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/drone/x/o/i/80-20-0-e88-drone-wifi-camera-drone-remote-control-quadcopter-original-imagqgvyshgcrhzk.jpeg",
    productName: "lezzie E88 Drone",
    price: "2499",
    description:
      "Compact drone with WiFi camera and easy remote control for aerial shots.",
  },
  {
    id: 15,
    productImg:
      "https://rukminim2.flixcart.com/image/416/416/kuef2q80/diary-notebook/d/5/x/3ds-notebook-90-gsm-premium-grade-paper-a5-ruled-believe-3ds-original-imag7j479zdbkszb.jpeg",
    productName: "3DS Wiro notebook",
    price: "299",
    description:
      "Premium A5 ruled notebook with 90 GSM paper, perfect for daily notes.",
  },
  {
    id: 16,
    productImg:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/perfume/g/d/q/200-banger-combo-ii-men-s-eau-de-parfum-villain-men-original-imagkxdb3dfkpedg.jpeg",
    productName: "VILLAIN Banger",
    price: "349",
    description: "Refreshing men’s eau de parfum with long-lasting fragrance.",
  },
  {
    id: 17,
    productImg:
      "https://rukminim2.flixcart.com/image/416/416/jy7kyvk0/wall-clock/j/c/h/wall-clock-w0033wa01-analog-titan-original-imafggbrxdupsfxq.jpeg",
    productName: "Titan Analog Wall Clock",
    price: "3499",
    description:
      "Elegant analog wall clock with precise timekeeping and stylish design.",
  },
  {
    id: 18,
    productImg:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/hand-messenger-bag/z/x/0/women-shoulder-bag-women-shoulder-bag-01-handbag-douceur-original-imahyf5s3hxzz96k.jpeg?q=70&crop=false",
    productName: "Douceur",
    price: "1799",
    description:
      "Trendy women’s shoulder bag with spacious compartments and premium finish.",
  },
  {
    id: 19,
    productImg:
      "https://rukminim2.flixcart.com/image/416/416/kwdv3bk0/headphone/k/f/j/-original-imag92pgr5yttjez.jpeg?q=70&crop=false",
    productName: "Apple AirPods (3rd generation)",
    price: "19100",
    description:
      "High-quality wireless earbuds with immersive sound and spatial audio.",
  },
  {
    id: 20,
    productImg:
      "https://rukminim2.flixcart.com/image/416/416/ksxjs7k0/bag/s/1/z/aptop-sleeve-compatible-with-macbook-air-13-inch-m1-m-1-a2337-original-imag6ed8ezrfnqk7.jpeg?q=70&crop=false",
    productName: "Swook",
    price: "1199",
    description:
      "Protective laptop sleeve compatible with 13-inch MacBook and other laptops.",
  },

  {
    id: 21,
    productImg:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/s/d/t/1-3301qm01-fastrack-men-original-imagsxzcpdz8f3e3.jpeg?q=70&crop=false",
    productName: "Fastrack Exuberant 2.0 Analog Watch",
    price: "7499",
    description:
      "Stylish men’s analog watch with durable strap and modern design.",
  },
];

const ProductList = () => {
  return (
    <>
      <Navbar />
      <div className="mt-40 text-center">
        <h1 className="text-4xl font-semibold mb-10 text-black">ProductList</h1>
        <div className="grid grid-clos-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {productList.map((productItem) => (
            <div
              key={productItem.id}
              className="border p-3 rounded-md hover:shadow-2xl cursor-pointer"
            >
              <Link to={`/product/${productItem.productName}`}>
                <img
                  src={productItem.productImg}
                  alt={productItem.productName}
                  className="w-30 h-60 mb-10 mx-auto"
                />
              </Link>

              <p className="text-center mb-3 text-blue-900 font-bold">
                {productItem.productName}
              </p>
              <p className="text-center font-semibold text-black mb-5">
                &#x20b9;{productItem.price}
              </p>

              <p className="text-center text-gray-700 mb-3 px-2">
                {productItem.description}
              </p>

              {/* Buy button always visible */}
              <button
                onClick={() => (window.location.href = "/payment")}
                style={{ backgroundColor: "#fb641b" }}
                className=" text-white px-4 py-2 rounded-md hover:bg-red-600 font-bold"
              >
                BUY NOW
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
