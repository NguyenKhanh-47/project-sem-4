import React, { useState } from "react";
import Footer from "../footer";
import Hambuger from "../hambuger";
import Header from "../header";
import SliderBanner from "../slider";
import Banner from "../banner";
import "./styles.css";
import ProductItem from "../productItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const [data, setData] = useState([
    {
      imgUrl: "assets/images/product_1.png",
      price: "$520.000",
      name: "Fujifilm X100T 16 MP Digital Camera (Silver)",
      productId: "1",
    },
    {
      imgUrl: "assets/images/product_2.png",
      price: "$520.000",
      name: "Fujifilm X100T 16 MP Digital Camera (Silver)",
      productId: "2",
    },
    {
      imgUrl: "assets/images/product_3.png",
      price: "$520.000",
      name: "Fujifilm X100T 16 MP Digital Camera (Silver)",
      productId: "3",
    },
    {
      imgUrl: "assets/images/product_4.png",
      price: "$520.000",
      name: "Fujifilm X100T 16 MP Digital Camera (Silver)",
      productId: "4",
    },
    {
      imgUrl: "assets/images/product_5.png",
      price: "$520.000",
      name: "Fujifilm X100T 16 MP Digital Camera (Silver)",
      productId: "5",
    },
    {
      imgUrl: "assets/images/product_6.png",
      price: "$520.000",
      name: "Fujifilm X100T 16 MP Digital Camera (Silver)",
      productId: "6",
    },
    {
      imgUrl: "assets/images/product_7.png",
      price: "$520.000",
      name: "Fujifilm X100T 16 MP Digital Camera (Silver)",
      productId: "7",
    },
    {
      imgUrl: "assets/images/product_8.png",
      price: "$520.000",
      name: "Fujifilm X100T 16 MP Digital Camera (Silver)",
      productId: "8",
    },
  ]);
  return (
    <div>
      <div className="MainDiv">
        <Header />
        <Hambuger />
        <SliderBanner />
        <div className="new_arrivals">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <div className="section_title new_arrivals_title">
                  <h2>New Arrivals</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div
                  className="product-grid"
                  data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'
                >
                  {data.map((x, index) => (
                    <ProductItem
                      key={index}
                      src={x.imgUrl}
                      price={x.price}
                      name={x.name}
                      productId={x.productId}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="deal_ofthe_week">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="deal_ofthe_week_img">
                  <img src="assets/images/deal_ofthe_week.png" alt="" />
                </div>
              </div>
              <div className="col-lg-6 text-right deal_ofthe_week_col">
                <div className="deal_ofthe_week_content d-flex flex-column align-items-center float-right">
                  <div className="section_title">
                    <h2>Deal Of The Week</h2>
                  </div>

                  <div className="red_button deal_ofthe_week_button">
                    <a href="/product/all">shop now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="best_sellers">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <div className="section_title new_arrivals_title">
                  <h2>Best Sellers</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Slider
                  dots={true}
                  infinite={true}
                  speed={500}
                  slidesToShow={5}
                  slidesToScroll={5}
                  autoplaySpeed={1000}
                  adaptiveHeight={true}
                  //   autoplay={true}
                  cssEase="linear"
                >
                 {data.map((x, index) => (
                    <ProductItem
                      key={index}
                      src={x.imgUrl}
                      price={x.price}
                      name={x.name}
                      productId={x.productId}
                    />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
