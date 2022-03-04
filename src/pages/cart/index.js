import React from "react";
import Footer from "./../footer";
import Header from "./../header";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = () => {
  return (
    <div>
      <Header />
      <div id="content">
        <div class="bg-light py-md-5 py-3">
          <div class="container">
            <div class="row px-3">
              <h4 class="text-danger">
                Cart <span class="h6">(2 Products)</span>
              </h4>
            </div>
            <div class="row">
              <div class="col-lg-7 bg-white mt-4 rounded">
                <div class="row mt-3 pb-2 border-bottom">
                  <div class="col-md-2 col-sm-6">
                    <p class="my-auto">
                      <img
                        class="img-fruid img-thumbnail"
                        src="../../Public/Images/Flashlight/FLASHLIGHT_N1.jpg"
                        alt=""
                      />
                    </p>
                  </div>
                  <div class="col-md-3 col-sm-6 col-6 pt-4 text-center my-auto">
                    <a href="productdetail.html">LED Flashlight_N1</a>
                  </div>
                  <div class="col-md-3 col-sm-4 mt-sm-3 pt-4 col-6 mt-md-auto my-auto">
                    <div class="input-group border border-primary rounded">
                      <span class="input-group-btn">
                        <button
                          class="btn btn-default shadow-none"
                          type="button"
                          id="btn-minus"
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                      </span>
                      <input
                        type="tel"
                        class="form-control p-0 shadow-none text-center border-0 font-weight-bold"
                        id="input-quantity"
                        value="1"
                      />
                      <span class="input-group-btn">
                        <button
                          class="btn btn-default shadow-none"
                          type="button"
                          id="btn-plus"
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </span>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-4 mt-sm-3 col-6 mt-md-auto pt-4 text-center my-auto">
                    <span>
                      <a href="" class="text-danger">
                        Delete
                      </a>
                    </span>
                  </div>
                  <div class="col-md-2 col-sm-4 mt-sm-3 col-6 mt-md-auto pt-4 text-center my-auto">
                    <span class="h5">$</span>
                    <span class="h5" id="product-price">
                      3.50
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 bg-white py-3 ml-auto mt-4 rounded">
                <div class="container">

                  <div class="row border-bottom py-3">
                    <div class="col-8 my-auto">
                      <span class="h5">Total:</span>
                    </div>
                    <div class="col-4 text-right">
                      <span class="price h5">$</span>
                      <span class="price h5" id="cart-total-price">
                        7.0
                      </span>
                    </div>
                  </div>
                  <div class="row py-4">
                    <button
                      type="button"
                      class="btn btn-danger btn-block shadow-none"
                      onclick="location.href='index.php?controller=payment&action=invoice'"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
