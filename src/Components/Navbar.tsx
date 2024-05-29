import { useState } from "react";
// import '../Styles/Navbar.css';
import { Link, useNavigate } from "react-router-dom";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from "@mui/icons-material/Menu";
import { Tooltip } from "@mui/material";
import { AccountCircleRounded } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const navigate = useNavigate();

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

  return (
    <nav className="bg-gray-800 p-8 fixed top-0 w-full z-50 rounded-md shadow-xl">
      <div className="max-w-full  sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Link
            to="/home"
            onClick={() => window.scrollTo(0, 0)}
            className="text-white mr-4"
          >
            <h4 className="text-2xl font-bold text-left">E-commerce Store</h4>
          </Link>
          <ul className="hidden sm:flex space-x-10 ml-64">
            <li>
              <Link className="text-white font-semibold" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-white font-semibold" to="/productList">
                Products
              </Link>
            </li>
            <li>
              <Link className="text-white font-semibold" to="/aboutus">
                About
              </Link>
            </li>
            <li>
              <Link className="text-white font-semibold" to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link className="text-white font-semibold" to="/faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="text-white font-semibold" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <button onClick={toggleMenu} className="sm:hidden text-white">
            <MenuIcon />
          </button>
          <div className="relative">
            <Tooltip title="Logout">
              <button onClick={toggleProfileMenu} className="text-white">
                <AccountCircleRounded sx={{ fontSize: "50px" }} />
              </button>
            </Tooltip>
            {profileMenu && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                >
                  <LogoutIcon /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {openMenu && (
        <ul className="bg-gray-700 inline-block">
          <li>
            <Link className="text-white py-2" to="/productList">
              Products
            </Link>
          </li>
          <li>
            <Link className="text-white py-2" to="/testimonials">
              Testimonials
            </Link>
          </li>
          <li>
            <Link className="text-white py-2" to="/faq">
              FAQ
            </Link>
          </li>
          <li>
            <Link className="text-white py-2" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

/* return (
            <nav className="bg-gray-800 p-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-white mr-4">
                            <h4>E-Commerce Store</h4>
                        </Link>
                        <ul className="hidden sm:flex space-x-4">
                            <li>
                                <Link className="text-white" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="text-white" to="/models">Products</Link>
                            </li>
                            <li>
                                <Link className="text-white" to="/testimonials">Testimonials</Link>
                            </li>
                            <li>
                                <Link className="text-white" to="/faq">FAQ</Link>
                            </li>
                            <li>
                                <Link className="text-white" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <button className="text-white hidden sm:block mr-4">
                            <ShoppingCartIcon />
                        </button>
                        <button onClick={toggleMenu} className="text-white sm:hidden">
                            Menu
                        </button>
                    </div>
                </div>
                {openMenu && (
                    <ul className="sm:hidden bg-gray-700 p-2">
                        <li>
                            <Link className="block text-white" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="block text-white" to="/models">Products</Link>
                        </li>
                        <li>
                            <Link className="block text-white" to="/testimonials">Testimonials</Link>
                        </li>
                        <li>
                            <Link className="block text-white" to="/faq">FAQ</Link>
                        </li>
                        <li>
                            <Link className="block text-white" to="/contact">Contact</Link>
                        </li>
                    </ul>
                )}
            </nav>
        );
    }
    
   */

/*
 return(
        <>
        <nav>
            {/* <div>
                <div>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <ul className="mobile-navbar__links">
                    <li>
                        <Link onClick={handleNav} to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleNav} to='/about'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleNav} to="/models">
                            Models
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleNav} to="/testimonials">
                            Testimonials
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleNav} to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div> 

            <div className="">
                <div className="navbar_img">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                         <img src={Logo} alt="Vehicle-log" />                     
                    </Link> 
                    <h4>E- Commerce Store</h4>
                </div>
                <ul className="navbar__links">
                    <li>
                        <Link className="home-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="models-link" to="/models">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link className="testi-link" to="/testimonials">
                            Testimonials
                        </Link>
                    </li>
                    <li>
                        <Link className="contact-link" to="/faq">
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link className="contact-link" to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
                {/* <div className="navbar__buttons">
                    <Link className="navbar__buttons__register" to="/">
                        Register
                    </Link>
                </div> 

                {/* <div>
                    <button style={{justifyContent:'right', alignItems:'right'}}>
                        <ShoppingCartIcon/>
                    </button>
                </div> 
            </div>
        </nav>
        </>

    );*/
