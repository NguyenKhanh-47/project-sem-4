import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import ProductItem from "../productItem";
import "./styles.css";

const Product = () => {
  const productCategories = ["Shirt", "Skirt", "T-shirt", "Pant", "Coat"];
  const [data, setData] = useState([
    {
      imgUrl: "/assets/images/product_1.png",
      price: "$520.000",
      name: "Fujifilm X100T 16 MP Digital Camera (Silver)",
      productId: "1",
    },
    {
      imgUrl: "/assets/images/product_2.png",
      price: "$520.000",
      name: "Fujifilm X100T 16 MP Digital Camera (Silver)",
      productId: "2",
    },
    {
      imgUrl: "/assets/images/product_3.png",
      price: "$520.000",
      name: "Fujifilm X100T 16 MP Digital Camera (Silver)",
      productId: "3",
    },
    {
      imgUrl: "/assets/images/product_4.png",
      price: "$520.000",
      name: "Fujifilm X100T 16 MP Digital Camera (Silver)",
      productId: "4",
    },
    {
      imgUrl: "/assets/images/product_5.png",
      price: "$520.000",
      name: "Fujifilm X100T 16 MP Digital Camera (Silver)",
      productId: "5",
    },
    {
      imgUrl: "/assets/images/product_6.png",
      price: "$520.000",
      name: "Fujifilm X100T 16 MP Digital Camera (Silver)",
      productId: "6",
    },
    {
      imgUrl: "/assets/images/product_7.png",
      price: "$520.000",
      name: "Fujifilm X100T 16 MP Digital Camera (Silver)",
      productId: "7",
    },
    {
      imgUrl: "/assets/images/product_8.png",
      price: "$520.000",
      name: "Fujifilm X100T 16 MP Digital Camera (Silver)",
      productId: "8",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(3);

  const queryParams = new URLSearchParams(window.location.search);
  const term = queryParams.get("page");

  const { category } = useParams();
  const [activeCategory, setActiveCategory] = useState(category);

  useEffect(() => {
    setActiveCategory(category);
  }, [category]);

  const history = useHistory();

  return (
    <div className="super_container">
      <Header />

      <div className="fs_menu_overlay"></div>

      <div className="hamburger_menu">
        <div className="hamburger_close">
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <div className="hamburger_menu_content text-right">
          <ul className="menu_top_nav">
            <li className="menu_item has-children">
              <a href="#">
                usd
                <i className="fa fa-angle-down"></i>
              </a>
              <ul className="menu_selection">
                <li>
                  <a href="#">cad</a>
                </li>
                <li>
                  <a href="#">aud</a>
                </li>
                <li>
                  <a href="#">eur</a>
                </li>
                <li>
                  <a href="#">gbp</a>
                </li>
              </ul>
            </li>
            <li className="menu_item has-children">
              <a href="#">
                English
                <i className="fa fa-angle-down"></i>
              </a>
              <ul className="menu_selection">
                <li>
                  <a href="#">French</a>
                </li>
                <li>
                  <a href="#">Italian</a>
                </li>
                <li>
                  <a href="#">German</a>
                </li>
                <li>
                  <a href="#">Spanish</a>
                </li>
              </ul>
            </li>
            <li className="menu_item has-children">
              <a href="#">
                My Account
                <i className="fa fa-angle-down"></i>
              </a>
              <ul className="menu_selection">
                <li>
                  <a href="#">
                    <i className="fa fa-sign-in" aria-hidden="true"></i>Sign In
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-user-plus" aria-hidden="true"></i>
                    Register
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu_item">
              <a href="#">home</a>
            </li>
            <li className="menu_item">
              <a href="#">shop</a>
            </li>
            <li className="menu_item">
              <a href="#">promotion</a>
            </li>
            <li className="menu_item">
              <a href="#">pages</a>
            </li>
            <li className="menu_item">
              <a href="#">blog</a>
            </li>
            <li className="menu_item">
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container product_section_container">
        <div className="row">
          <div className="col product_section clearfix">
            <div className="breadcrumbs d-flex flex-row align-items-center">
              <ul>
                <li>
                  <span onClick={() => history.push('/home')} role='button'>Home</span>
                </li>
                <li className="active">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  Product
                </li>
              </ul>
            </div>

            <div className="sidebar">
              <div className="sidebar_section">
                <div className="sidebar_title">
                  <h5>Product Category</h5>
                </div>
                <ul className="sidebar_categories">
                  {productCategories.map((x) => (
                    <li className={x === activeCategory && "active"}>
                      <div
                        role="button"
                        onClick={() => history.push(`/product/${x}`)}
                      >
                        {x === activeCategory ? (
                          <div className="text-danger font-weight-bold">
                            <span>
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              ></i>
                            </span>
                            <span className="ml-2">{x}</span>
                          </div>
                        ) : (
                          <span>{x}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="main_content">
              <div className="products_iso">
                <div className="row">
                  <div className="col">
                    <div className="product_sorting_container product_sorting_container_top">
                      <ul className="product_sorting">
                        <li>
                          <span className="type_sorting_text">
                            Default Sorting
                          </span>
                          <i className="fa fa-angle-down"></i>
                          <ul className="sorting_type">
                            <li
                              className="type_sorting_btn"
                              data-isotope-option='{ "sortBy": "original-order" }'
                            >
                              <span>Default Sorting</span>
                            </li>
                            <li
                              className="type_sorting_btn"
                              data-isotope-option='{ "sortBy": "price" }'
                            >
                              <span>Price</span>
                            </li>
                            <li
                              className="type_sorting_btn"
                              data-isotope-option='{ "sortBy": "name" }'
                            >
                              <span>Product Name</span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div className="pages d-flex flex-row align-items-center">
                        {currentPage !== 1 && (
                          <div id="next_page" className="page_next mr-3">
                            <span
                              onClick={() => setCurrentPage(currentPage - 1)}
                            >
                              <i
                                className="fa fa-long-arrow-left"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </div>
                        )}
                        <div className="page_current">
                          <span>{currentPage}</span>
                          <ul className="page_selection">
                            {[...Array(totalPage).keys()].map((x) => (
                              <li>
                                <span
                                  onClick={() => history.push(`?page=${x + 1}`)}
                                  href="#"
                                >
                                  {x + 1}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="page_total">
                          <span>of</span> {totalPage}
                        </div>
                        {currentPage !== totalPage && (
                          <div id="next_page" className="page_next">
                            <span
                              onClick={() => setCurrentPage(currentPage + 1)}
                            >
                              <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="product-grid">
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
                    <div className="product_sorting_container product_sorting_container_bottom clearfix">
                      <div className="pages d-flex flex-row align-items-center">
                        {currentPage !== 1 && (
                          <div id="next_page_1" className="page_next mr-3">
                            <span
                              onClick={() => setCurrentPage(currentPage - 1)}
                            >
                              <i
                                className="fa fa-long-arrow-left"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </div>
                        )}
                        <div className="page_current">
                          <span className="active_page">{currentPage}</span>
                          <ul className="page_selection">
                            {[...Array(totalPage).keys()].map((x) => (
                              <li>
                                <span
                                  onClick={() => history.push(`?page=${x + 1}`)}
                                  href="#"
                                >
                                  {x + 1}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="page_total">
                          <span>of</span> {totalPage}
                        </div>
                        {currentPage !== totalPage && (
                          <div id="next_page_1" className="page_next">
                            <span
                              onClick={() => setCurrentPage(currentPage + 1)}
                            >
                              <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </div>
                        )}
                      </div>
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

export default Product;
