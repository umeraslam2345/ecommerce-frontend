import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
    const { grid } = props;
    console.log(grid);
    let location = useLocation();
    return (

        <>

            <div className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"
                } `}>
                <Link to={`${location.pathname == "/"
              ? "/product/:id"
              : location.pathname == "/product/:id"
                ? "/product/:id"
                : ":id"
            }`} className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent"><img src={wish} alt="wishlist" /></button>
                    </div>
                    <div className="product-image">

                        <img src={watch} className='img-fluid' alt="product-image" srcset="" />
                        <img src={watch2} className='img-fluid' alt="product-image" srcset="" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">
                            Havels
                        </h6>
                        <h5 className="product-title">
                            Kinds Headphone Bulk 10 pack Multi colored for students
                        </h5>
                        <ReactStars
                            edit={false}
                            count={5}
                            value={4}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti quos
                            dolores et quas molestias excepturi sint occaecati cupiditate non
                            provident, similique sunt...
                        </p>
                        <p className="price">
                            $100
                        </p>
                    </div>

                    <div className="action-bar position-absolute">

                        <div className="d-flex flex-column ">
                            <button className="border-0 bg-transparent"><img src={prodcompare} alt="compare" /></button>
                        </div>


                        <div className="d-flex flex-column">
                            <button className="border-0 bg-transparent"><img src={view} alt="view" /></button>
                        </div>

                        <div className="d-flex flex-column">
                            <button className="border-0 bg-transparent"><img src={addcart}  alt="addcart" /></button>
                        </div>


                    </div>
                </Link>
            </div >

            <div className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"
                } `}>
                <Link  to={`${location.pathname == "/"
              ? "/product/:id"
              : location.pathname == "/product/:id"
                ? "/product/:id"
                : ":id"
            }`} className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent"><img src={wish} alt="wishlist" /></button>
                    </div>
                    <div className="product-image">

                        <img src={watch} className='img-fluid' alt="product-image" srcset="" />
                        <img src={watch2}  className='img-fluid' alt="product-image" srcset="" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">
                            Havels
                        </h6>
                        <h5 className="product-title">
                            Kinds Headphone Bulk 10 pack Multi colored for students
                        </h5>
                        <ReactStars
                            edit={false}
                            count={5}
                            value={4}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti quos
                            dolores et quas molestias excepturi sint occaecati cupiditate non
                            provident, similique sunt...
                        </p>
                        <p className="price">
                            $100
                        </p>
                    </div>

                    <div className="action-bar position-absolute">

                        <div className="d-flex flex-column ">
                            <button className="border-0 bg-transparent"><img src={prodcompare} alt="compare" /></button>
                        </div>


                        <div className="d-flex flex-column">
                            <button className="border-0 bg-transparent"><img src={view} alt="view" /></button>
                        </div>

                        <div className="d-flex flex-column">
                            <button className="border-0 bg-transparent"><img src={addcart} alt="addcart" /></button>
                        </div>


                    </div>
                </Link>
            </div >


        </>

    )
}

export default ProductCard