import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const ProductItem = (props) => {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "assets/js/jquery-3.2.1.min.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  const history = useHistory()

  const itemClick = (productId) => {
    history.push(`/detail/${productId}`)
  }

  const { src, name, price, productId } = props;

  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  
  return (
    <div className="product-item accessories">
      <div className="product discount product_filter">
        <div className="product_image">
          <img src={src || "assets/images/product_1.png"} alt="" />
        </div>
        <div className="product_info">
          <h6 className="product_name mb-3" role="button" onClick={() => itemClick(productId)}>
            <span>
              {name || "Fujifilm X100T 16 MP Digital Camera (Silver)"}
            </span>
          </h6>
          <div className="product_price">{price || "$520.00"}</div>
        </div>
      </div>
      <div className="red_button add_to_cart_button">
        <span role='button' onClick={() => history.push(`/cart/${productId}`)} className='text-light text-uppercase'>add to cart</span>
      </div>
    </div>
  );
};

export default ProductItem;
