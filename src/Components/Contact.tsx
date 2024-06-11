import { useFormik } from "formik";
import * as Yup from "yup";
// import React, { useRef } from 'react';

import "../Styles/Contact.css";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Contact = () => {
  const formik = useFormik({
    initialValues: {
      from_name: "",
      from_email: "",
      message: "",
    },

    validationSchema: Yup.object({
      from_name: Yup.string().required("Invalid Name!"),
      from_email: Yup.string()
        .email("Invalid E-mail!")
        .required("Invalid E-mail!"),
      message: Yup.string().required("Invalid Message!"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      try {
        // sendEmail(values);
        resetForm();
        toast.success("Email Sent Successfully");
      } catch {
        toast.error("Something Went Wrong.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  //     const form = useRef();

  //    const sendEmail =  () => {

  //     try {
  //         emailjs.sendForm('service_crmsmh4', 'template_yyqupcs', form.current, {
  //             publicKey: 'auwB11NMgJ3j1csot',
  //         });
  //     } catch (error) {
  //         console.error('Error sending email:', error);
  //         throw new Error('Failed to send email');
  //     }
  //    };
  return (
    <>
      <Navbar />
      <ToastContainer />
      <section>
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional Information?</h2>

              <a href="tel:+1234567890">
                <CallIcon className="icon" /> +91 6305075608
              </a>
              <a href="mailto:kvijayreddy88@gmail.com">
                <EmailIcon className="icon" /> kvijayreddy88@gmail.com
              </a>
              <a href="https://carrental.com/hyderabad">
                <LocationOnIcon className="icon" /> Hyderbad, Hitech City
              </a>
            </div>

            <div className="contact-div__form">
              <form onSubmit={formik.handleSubmit}>
                <label>
                  Full Name <b>*</b>
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Vijay Reddy"
                  name="from_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.from_name}
                />

                {formik.touched.from_name && formik.errors.from_name ? (
                  <span
                    className="error"
                    style={{
                      color: "red",
                      fontFamily: "poppins,sanserif",
                      fontWeight: "600",
                      marginTop: "-30px",
                    }}
                  >
                    {formik.errors.from_name}
                  </span>
                ) : null}

                <label>
                  Email <b>*</b>
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  name="from_email"
                  id="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.from_email}
                />
                {formik.touched.from_email && formik.errors.from_email ? (
                  <span
                    className="error"
                    style={{
                      color: "red",
                      fontFamily: "poppins,sanserif",
                      fontWeight: "600",
                      marginTop: "-30px",
                    }}
                  >
                    {formik.errors.from_email}
                  </span>
                ) : null}

                <label>
                  Your Message <b>*</b>
                </label>
                <textarea
                  placeholder="Write Something Here..."
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <span
                    className="error"
                    style={{
                      color: "red",
                      fontFamily: "poppins,sanserif",
                      fontWeight: "600",
                      marginTop: "-30px",
                    }}
                  >
                    {formik.errors.message}
                  </span>
                ) : null}

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
