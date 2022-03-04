import React from "react";
import Footer from "../footer";
import Header from "../header";
import "./styles.css";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="container product_section_container">
        <div className="row">
          <div className="col product_section clearfix">
            <div className="breadcrumbs d-flex flex-row align-items-center">
              <ul>
                <li>
                  <a href="/home">Home</a>
                </li>
                <li className="active">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contact_contents">
          <h1>Contact Us</h1>
          <p>
            There are many ways to contact us. You may drop us a line, give us a
            call or send an email, choose what suits you the most.
          </p>
          <div>
            <p>0909 999 999</p>
            <p>TMVK@gmail.com</p>
          </div>
          <div>
            <p>Open hours: 8.00-21.00 Mon-Fri</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
