import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart, AiOutlinePaperClip } from "react-icons/ai";
import Container from "../components/Container";

const SingleProduct = () => {
  const copyToClipboard = (text) => {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  const props = {
    width: 600,
    height: 600,
    zoomWidth: 500,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };
  const [orderedProduct, setorderedProduct] = useState(true);
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
      <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    className="img-fluid"
                    alt="watch"
                  ></img>
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    className="img-fluid"
                    alt="watch"
                  ></img>
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    className="img-fluid"
                    alt="watch"
                  ></img>
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    className="img-fluid"
                    alt="watch"
                  ></img>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Watch Bulk 10 Pack Multi Colored For Students
                  </h3>
                </div>
                <div className="border-bottom py-2">
                  <p className="price">$ 100.00</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">(2 Reviews)</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className="border-bottom">
                  <div className="description-wrapper py-2">
                    <h3>Description</h3>
                    <div className="p-1">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae et sapiente aliquam cum consequatur unde
                        ullam laboriosam voluptates odit pariatur rerum,
                        perspiciatis, magnam reiciendis fugit consectetur.
                        Voluptas itaque ratione rem!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-bottom py-2">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand:</h3>
                    <p className="product-data">Havells</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Categories:</h3>
                    <p className="product-data">Smartwatches, watches</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags:</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availability:</h3>
                    <p className="product-data">In Stock</p>
                  </div>
                </div>
                <div className="border-bottom py-2">
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Size:</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border-1 bg-white text-dark border border-secondary">
                        S
                      </span>
                      <span className="badge border-1 bg-white text-dark border border-secondary">
                        M
                      </span>
                      <span className="badge border-1 bg-white text-dark  border border-secondary">
                        L
                      </span>
                      <span className="badge border-1 bg-white text-dark border border-secondary">
                        XL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Color:</h3>
                    <Color />
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <div className="d-flex flex-row align-items-center gap-10">
                      <h3 className="product-heading">Quantity:</h3>
                      <div>
                        <input
                          type="number"
                          name=""
                          min={1}
                          max={10}
                          defaultValue={1}
                          style={{ width: "50px" }}
                          id=""
                          className="text-center form-control"
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-15 mt-3">
                      <button className="button border-0" type="submit">
                        Add To Cart
                      </button>
                      <button className="button signup border-0" type="submit">
                        Buy It Now
                      </button>
                    </div>
                  </div>
                  <div className="border-bottom">
                    <div className="d-flex align-items-center gap-15">
                      <div>
                        <a href="" className="ms-2 me-4">
                          <TbGitCompare className="me-1" />
                          Add to Compare
                        </a>
                      </div>
                      <div>
                        <a href="">
                          <AiOutlineHeart className="me-1" />
                          Add to Wishlist
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="pt-3">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Shipping & Returns
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the first item's accordion body.
                            </strong>{" "}
                            It is shown by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element.
                          </div>
                        </div>
                      </div>
                      <a
                        href="javascript:void(0);"
                        onClick={() =>
                          copyToClipboard(
                            "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                          )
                        }
                        className="ms-2 mt-3"
                      >
                        <AiOutlinePaperClip className="me-1"/>
                        Share Product
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2">
      <div className="row">
            <div className="col-12">
              <h3 id="review">Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href=""
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        placeholder="Comments"
                        cols="30"
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Navdeep</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat amet quos molestiae adipisci porro corporis ab
                      natus, vitae quibusdam, debitis incidunt totam nostrum
                      aliquam! Repellendus fuga quia laborum laudantium placeat?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
      <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
      </Container>
    </>
  );
};

export default SingleProduct;
