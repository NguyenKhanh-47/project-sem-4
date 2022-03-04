import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div
              className="banner_item align-items-center"
              style={{ backgroundImage: "url(assets/images/banner_1.jpg)" }}
            >
              <div className="banner_category">
                <a href="#">women's</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="banner_item align-items-center"
              style={{ backgroundImage: "url(assets/images/banner_2.jpg)" }}
            >
              <div className="banner_category">
                <a href="#">accessories's</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="banner_item align-items-center"
              style={{ backgroundImage: "url(assets/images/banner_3.jpg)" }}
            >
              <div className="banner_category">
                <a href="#">men's</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
