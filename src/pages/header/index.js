import React from "react";
import './styles.css'

const Header = () => {
  return (
    <header className="header trans_300">

      <div className="main_nav_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-right">
              <div className="logo_container">
                <a href="/home">
                  TMVK
                </a>
              </div>
              <nav className="navbar">
                <ul className="navbar_menu">
                  <li>
                    <a href="/product/all">product</a>
                  </li>
                  <li>
                    <a href="/contact">contact</a>
                  </li>
                </ul>
                <ul className="navbar_user">
                  <li>
                    <a href="#">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="checkout">
                    <a href="#">
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                      <span id="checkout_items" className="checkout_items">
                        2
                      </span>
                    </a>
                  </li>
                  <li className="profile">
                    <a href="#">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </a>
                    <ul className="profile_selection">
                      <li role="button">
                        Log out
                      </li>
                    </ul>
                  </li>
                  
                </ul>
                <div className="hamburger_container">
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
