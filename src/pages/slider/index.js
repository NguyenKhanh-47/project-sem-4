import React from "react";
import { useHistory } from 'react-router';

const Slider = () => {
  const history = useHistory()
  return (
    <div
      className="main_slider"
      style={{ backgroundImage: "url(assets/images/slider_1.jpg)" }}
    >
      <div className="container fill_height">
        <div className="row align-items-center fill_height">
          <div className="col">
            <div className="main_slider_content">
              <h6>Spring / Summer Collection 2021</h6>
              <h1>Get up to 30% Off New Arrivals</h1>
              <div className="red_button shop_now_button">
                <span onClick={() => history.push('/product/all')} role='button' className="text-light text-uppercase">shop now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
