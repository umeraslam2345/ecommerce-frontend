import React, { useState } from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import Container from '../components/Container';

const SingleProduct = () => {
    const props = { width: 400, height: 500, zoomWidth: 600, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" };

    const [orderedProduct, setorderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }
    return (
        <>
            <Meta title="Product Names" />
            <BreadCrumb title="Product Names" />

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
                                <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="" />
                            </div>
                            <div>
                                <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="" />
                            </div>
                            <div>
                                <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="" />
                            </div>
                            <div>
                                <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="" />
                            </div>

                        </div>
                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className='border-bottom'>
                                <h3 className='title'>
                                    Kids Headphones Bulk 10pack Multicoloured for Students
                                </h3>

                            </div>
                            <div className="border-bottom py-3">
                                <p className="price">
                                    $ 100
                                </p>
                                <div className='d-flex align-items-center gap-10'>

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
                                    <p className='mb-0 t-review'>(2 Reviews)</p>
                                </div>
                                <a className='review-btn' href="#review">Write a Review</a>
                            </div>
                            <div className=" py-3">
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className="product-heading">
                                        Type :
                                    </h3><p className='product-data'>Gfd</p>

                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className="product-heading">
                                        Brand :
                                    </h3><p className='product-data'>Haves</p>

                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className="product-heading">
                                        Category :
                                    </h3><p className='product-data'>Watch</p>

                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className="product-heading">
                                        Tags :
                                    </h3><p className='product-data'>Watch</p>

                                </div>

                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className="product-heading">
                                        Availiability :
                                    </h3><p className='product-data'>In Stock</p>

                                </div>

                                <div className='d-flex gap-10 flex-column  mb-3 mt-2'>
                                    <h3 className="product-heading">
                                        Size :
                                        <div className="d-flex flex-wrap gap-15">
                                            <div className="badge border-1 bg-white text-dark border-secondary">S</div>
                                            <div className="badge border-1 bg-white text-dark border-secondary">M</div>
                                            <div className="badge border-1 bg-white text-dark border-secondary">XL</div>
                                            <div className="badge border-1 bg-white text-dark border-secondary">XXL</div>
                                        </div>
                                    </h3>

                                </div>
                                <div className='d-flex gap-10 flex-column  mb-3 mt-2'>
                                    <h3 className="product-heading">
                                        Color :
                                    </h3><Color />

                                </div>

                                <div className='d-flex align-items-center gap-15 flex-row  mb-3 mt-2'>
                                    <h3 className="product-heading">
                                        Quantity :</h3>
                                    <div className=''>
                                        <input type="number" name="" min={1} max={10} step={{ width: "70px" }} className="form-control" id="" />
                                    </div>
                                    <div className='d-flex align-items-center gap-30 ms-5'>
                                        <button className='button border-0'>Add to Cart</button>
                                        <button className='button signup'>Buy it Now</button>
                                    </div>

                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <div>
                                        <a href=""><AiOutlineHeart className='fs-5 me-2' /> Add to compare</a>
                                    </div>
                                    <div>
                                        <a href=""><TbGitCompare className='fs-5 me-2' /> Add to wishlist</a>
                                    </div>
                                </div>

                                <div className='d-flex gap-10 flex-column  my-3'>
                                    <h3 className="product-heading">
                                        Shipping & Returns
                                    </h3><p className="product-data">
                                        Free shipping and returns available on all orders! <br /> We
                                        ship all US domestic orders within
                                        <b> 5-10 business days!</b>
                                    </p>

                                </div>

                                <div className='d-flex gap-10 align-items-center my-3'>
                                    <h3 className="product-heading">
                                        Product Link
                                    </h3><a href="javascript:void(0);" onClick={() => copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg")}>
                                        Copy Product Link
                                    </a>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Container>


            <Container class1="description-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h4>
                            Description
                        </h4>
                        <div className='bg-white p-3'>

                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, consequuntur pariatur earum veniam maiores deserunt, ab totam dolore nisi eum, debitis numquam adipisci. Iure sit incidunt necessitatibus ullam. Numquam, incidunt.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="reviews-wrapper pb-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 id='review'>Reviews</h3>
                        <div className="review-inner-wrapper">
                            <div className="review-head d-flex justify-content-between align-items-end">
                                <div>
                                    <h4 className='mb-2'>Customer Reviews</h4>
                                    <div className='d-flex gap-10'>
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
                                        <p className='mb-0 align-items-center'>Based on 2 Reviews</p>
                                    </div>
                                </div>
                                {
                                    orderedProduct && (
                                        <div>
                                            <a className='text-dark text-decoration-underline' href="">Write a Review</a>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="review-form py-4">
                                <h4>Write a Review</h4>
                                <form action="" className='d-flex flex-column gap-15'>

                                    <div>

                                        <ReactStars
                                            edit={true}
                                            count={5}
                                            value={4}
                                            size={24}
                                            isHalf={true}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                    </div>

                                    <div>
                                        <textarea name="" className='w-100 form-control' id="" cols="30" rows="4" placeholder='Comments'></textarea>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <button className='button border-0'>Submit Review</button>
                                    </div>
                                </form>
                            </div>
                            <div className="reviews mt-4">
                                <div className="review ">
                                    <div className='d-flex gap-10 align-items-center'>
                                        <h6 className='mb-0'>Navdeep</h6>
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
                                    </div>
                                    <p className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam est quo esse placeat distinctio quas recusandae ut pariatur aliquam molestiae voluptatum adipisci odit cupiditate, totam error. Optio expedita veniam aperiam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="popular-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Our Popular Products
                        </h3>
                    </div>


                </div>
                <div className="row">


                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </Container>



        </>
    )
}

export default SingleProduct