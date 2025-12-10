import { useState } from "react";
// import '../Styles/Navbar.css';
import { Link, useNavigate } from "react-router-dom";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Tooltip } from "@mui/material";
import { AccountCircleRounded } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
// import { getUserInfo } from "../Service/user";
import globalobject from "../Common/global-variable";
import { getFormattedNameAndInitials } from "../Common/CommonUtil";
// import { Link } from "react-router-dom";
// import { username } from "../Service/user";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const toggleProfileMenu = () => {
    setProfileMenu(!profileMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.clear();
    navigate("/login");
  };

  const userObject = globalobject.userObject;
  const { firstName, lastName } = getFormattedNameAndInitials(userObject);

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

  return (
    <>
      <div className="fixed w-full bg-gray-800 text-white p-5 shadow-2xl  z-10 top-0">
        <nav className="hidden lg:flex justify-around items-center h-16">
          <div className="text-2xl font-semibold">
            <Link to="/home">E-Commerce Store</Link>
          </div>
          <ul className="flex gap-8 list-none text- xl">
            <li>
              <Link
                className="text-white font-semibold hover:text-red-500"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                // onClick={() => handleProtectedClick("/product_list")}
                className="text-white font-semibold hover:text-red-500"
                to="/products"
              >
                Products
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleProtectedClick("/aboutus")}
                className="text-white font-semibold hover:text-red-500"
                // to="/aboutus"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleProtectedClick("/testimonials")}
                className="text-white font-semibold hover:text-red-500"
              >
                Testimonials
              </button>
            </li>
            <li>
              <Link
                className="text-white font-semibold hover:text-red-500"
                to="/faq"
              >
                FAQ
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleProtectedClick("/contact")}
                className="text-white font-semibold hover:text-red-500"
                // to="/contact"
              >
                Contact
              </button>
            </li>
          </ul>
          <div className="relative flex items-center gap-4">
            {token ? (
              <>
                <div className="text-white">
                  <p>
                    {firstName} {lastName}
                  </p>
                  <p className="text-xs hover:text-red-200">
                    {globalobject.userObject.email}
                  </p>
                </div>
                <Tooltip title="Account">
                  <button onClick={toggleProfileMenu} className="text-white">
                    <AccountCircleRounded sx={{ fontSize: "50px" }} />
                  </button>
                </Tooltip>
                {profileMenu && (
                  <div className="absolute right-0 mt-12 py-2 w-32 bg-white rounded-md shadow-xl z-20">
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                    >
                      <LogoutIcon /> Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>

      <div className="lg:hidden fixed w-full bg-gray-800 text-white shadow-2xl z-10 top-0">
        <nav className="flex justify-between items-center h-16 px-4">
          <div className="text-2xl font-semibold">E-commerce Store</div>
          <div className="relative">
            <div className="cursor-pointer" onClick={toggleMenu}>
              {openMenu ? (
                <CloseIcon fontSize="large" />
              ) : (
                <MenuIcon fontSize="large" />
              )}
            </div>
            <ul
              className={`absolute top-full right-0 bg-gray-900 shadow-2  xl list-none hover:bg-gray-300 transition-max-heght overflow-hidden  ${
                openMenu ? "max-h-80" : "max-h-0"
              }`}
            >
              <li>
                <Link
                  to="/home"
                  className="block px-4 py-2 hover:bg-gray-800"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/productList"
                  className="block px-4 py-2 hover:bg-gray-800"
                  onClick={toggleMenu}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className="block px-4 py-2 hover:bg-gray-800"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="block px-4 py-2 hover:bg-gray-800"
                  onClick={toggleMenu}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="block px-4 py-2 hover:bg-gray-800"
                  onClick={toggleMenu}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block px-4 py-2 hover:bg-gray-800"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 hover:bg-gray-800"
                >
                  <LogoutIcon /> Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
