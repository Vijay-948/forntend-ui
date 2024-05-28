import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import ErrorPage from './Components/error-page';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import ProductList from './Components/ProductList';
import Testimonials from './Components/Testimonials';
import Faq from './Components/Faq';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Register/>
  },
  {
    path: '/login',
    element: <Login/>

  },
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/navbar',
        element: <Navbar/>
      },  
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/aboutUs',
        element: <About />
      },
      {
        path: '/productList',
        element: <ProductList/>
      },
      {
        path: '/testimonials',
        element: <Testimonials/>
      },
      {
        path: '/faq',
        element: <Faq/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/footer',
        element: <Footer/>
      }
    ]
  }
])
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// <Route path="/home"  element={<Home/>} />
// <Route path="/navbar"  element={<Navbar />} />
// <Route path="/signup" element={<Register />} />
// <Route path="/login" element={<Login />} />
// <Route path="/resetPassword" element={<ResetPassword/>} />
// <Route path="/testimonials" element={<Testimonials/>} />
// <Route path="footer" element={<Footer/>} />
// <Route path='/contact' element={<Contact />} />
// <Route path='/productList' element={<ProductList/>} />
// <Route path="/product/productName" Component={Products} />
// <Route path="/faq" element={<Faq/>} />
// <Route path="/aboutus" element={<About/>} />
// <Route path='/pin' element={<EmailVerificationCode/>} />
