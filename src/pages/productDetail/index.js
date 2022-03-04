import React, { useState } from "react";
import Footer from "../footer";
import Header from "../header";
import "./single_styles.css";
import "./single_responsive.css";
import { useParams, useHistory } from "react-router";

const ProductDetail = (props) => {
  const { productId } = useParams();
  const history = useHistory();
  const listImg = [
    "/assets/images/product_1.png",
    "/assets/images/product_2.png",
    "/assets/images/product_3.png",
  ];
  const [currentImg, setCurrentImg] = useState(listImg[0]);
  const [quantity, setQuantity] = useState(
    1
  );
  // const [quantity, setQuantity] = useState(
  //   +localStorage.getItem('product')[`p-${productId}`] || 1
  // );
  console.log("🚀 ~ file: index.js ~ line 20 ~ ProductDetail ~ quantity", JSON.parse(localStorage.getItem('product')))

  const handleMinus = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };
  const handlePlus = () => {
    setQuantity(quantity + 1);
  };
  const handleAdd = () => {
    const currentValue = JSON.stringify(localStorage.getItem("product"));
    console.log("🚀 ~ file: index.js ~ line 31 ~ handleAdd ~ currentValue", currentValue)
    const name = `p-${productId}`;
    const value = {
      ...currentValue,
      [name]: quantity,
    }
    console.log("🚀 ~ file: index.js ~ line 34 ~ handleAdd ~ value", value)
    localStorage.setItem("product", JSON.stringify(value));
    // history.push("/cart");
  };

  return (
    <div>
      <Header />

      <div className="container single_product_container">
        <div className="product_section clearfix">
          <div className="breadcrumbs d-flex flex-row align-items-center">
            <ul>
              <li>
                <span onClick={() => history.push("/home")} role="button">
                  Home
                </span>
              </li>
              <li>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
                <span
                  onClick={() => history.push("/product/all")}
                  role="button"
                >
                  Product
                </span>
              </li>
              <li>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
                Product Detail
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="single_product_pics">
              <div className="row">
                <div className="col-lg-3 thumbnails_col order-lg-1 order-2">
                  <div className="single_product_thumbnails">
                    <ul>
                      {listImg.map((x, index) => (
                        <li
                          key={index}
                          className={x === currentImg && "active"}
                          onClick={() => setCurrentImg(x)}
                        >
                          <img src={x} alt="" data-image={x} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-9 image_col order-lg-2 order-1">
                  <div className="single_product_image">
                    <div
                      className="single_product_image_background"
                      style={{ backgroundImage: `url(${currentImg})` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="product_details">
              <div className="product_details_title">
                <h2>Pocket cotton sweatshirt</h2>
                <p>
                  Nam tempus turpis at metus scelerisque placerat nulla
                  deumantos solicitud felis. Pellentesque diam dolor, elementum
                  etos lobortis des mollis ut...
                </p>
              </div>
              {/* <div className="free_delivery d-flex flex-row align-items-center justify-content-center">
                <span className="ti-truck"></span>
                <span>free delivery</span>
              </div> */}
              <div className="original_price">$629.99</div>
              <div className="product_price">$495.00</div>
              <div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
                <span>Quantity:</span>
                <div className="quantity_selector">
                  <span className="minus" onClick={handleMinus}>
                    <i className="fa fa-minus" aria-hidden="true"></i>
                  </span>
                  <span id="quantity_value">{quantity}</span>
                  <span className="plus" onClick={handlePlus}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="red_button px-3 ml-5 text-light" role="button">
                  <span onClick={handleAdd}>Add to cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tabs_section_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div id="tab_1" className="tab_container active">
                <div className="row">
                  <div className="col-lg-5 desc_col">
                    <div className="tab_title mb-4">
                      <h4>Description</h4>
                    </div>
                    <div className="tab_text_block">
                      <h2>Pocket cotton sweatshirt</h2>
                      <p>
                        Nam tempus turpis at metus scelerisque placerat nulla
                        deumantos solicitud felis. Pellentesque diam dolor,
                        elementum etos lobortis des mollis ut...
                      </p>
                    </div>
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

export default ProductDetail;
