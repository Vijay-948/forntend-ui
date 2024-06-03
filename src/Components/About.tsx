import Navbar from "./Navbar";
import PublicIcon from "@mui/icons-material/Public";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white-600 py-8 px-4 sm:px-6 lg:px-6 mt-40">
        <div className="max-w-7xl mx-auto">
          <div className="lg:text-center">
            <h1 className="text-blue-700 font-bold text-xl tracking-tight uppercase">
              About US
            </h1>
            <p className="mt-2 text-3xl font-extrabold text-gray-700 tracking-wide sm:text-4xl">
              Welcome to Our Store
            </p>
            <p className="mt-8 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We are dedicated to providing you with the best products and
              shopping experience. Our mission is to make online shopping
              simple, secure and enjoy for everyone
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="mt-5">
                <svg className="items-center justify-center text-blue-600 h-16 w-16">
                  <PublicIcon />
                </svg>
                <div className="mt-3">
                  <h3 className="text-lg font-semibold text-gray-900 leading-6">
                    Global Reach
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    We ship our products worldwide, ensuring that everyone can
                    enjoy our quality merchandise no matter where they are.
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <svg className="items-center justify-center text-blue-600 h-16 w-16">
                  <CurrencyRupeeIcon />
                </svg>
                <div className="mt-3">
                  <h3 className="text-lg font-semibold text-gray-900 leading-6">
                    Affordable Prices
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    We believe that everyone should have access to high-quality
                    products at affordable prices. That's why we strive to keep
                    our prices competitive.
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <svg className="items-center justify-center text-blue-600 h-16 w-16">
                  <PeopleAltIcon />
                </svg>
                <div className="mt-3">
                  <h3 className="text-lg font-semibold text-gray-900 leading-6">
                    Excellent Customer Service
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    Our dedicated customer support team is here to assist you
                    with any questions or concerns you may have. We're committed
                    to providing excellent service to our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
