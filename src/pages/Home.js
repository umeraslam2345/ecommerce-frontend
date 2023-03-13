import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container'
import { services } from "../utils/Data";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sake</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className='d-flex align-items-center gap-15' key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>
                        {i.title}
                      </h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>

                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className='d-flex gap align-iteems-center'>
                <div >
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>

              <div className='d-flex gap align-iteems-center'>
                <div >
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>

              <div className='d-flex gap align-iteems-center'>
                <div >
                  <h6>Smart tv</h6>
                  <p>10 items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>

              <div className='d-flex gap align-iteems-center'>
                <div >
                  <h6>Smart watches</h6>
                  <p>10 items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>

              <div className='d-flex gap align-iteems-center'>
                <div >
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>

              <div className='d-flex  align-iteems-center'>
                <div >
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>

              <div className='d-flex  align-iteems-center'>
                <div >
                  <h6>Smart tv</h6>
                  <p>10 items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>

              <div className='d-flex gap-30 align-iteems-center'>
                <div >
                  <h6>Smart watches</h6>
                  <p>10 items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>


            </div>
          </div>
        </div>
      </Container>

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Featured Collection
            </h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card  position-relative">
              <img src="images/famous-1.webp" className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5>
                  Big Screen
                </h5>
                <h6>
                  Smart Watch Series
                </h6>
                <p>From $399 or 16/mo for 24 mo.</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card  position-relative">
              <img src="images/famous-2.webp" className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>
                  Studio Display
                </h5>
                <h6 className='text-dark'>
                  600 nits brightness
                </h6>
                <p className='text-dark'>27 inch 5k </p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card  position-relative">
              <img src="images/famous-3.webp" alt="famous" className='img-fluid' />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>
                  Smartphones
                </h5>
                <h6 className='text-dark'>
                  Smart Phone 13pro
                </h6>
                <p className='text-dark'>Now in green From $999 or $14 62/mo for 24 note</p>
              </div>
            </div>
          </div>


          <div className="col-3">
            <div className="famous-card  position-relative">
              <img src="images/famous-4.webp" alt="famous" className='img-fluid' />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>
                  Home Speakers
                </h5>
                <h6 className='text-dark'>
                  Room Filling Sound
                </h6>
                <p className='text-dark'>From $699 or $99 month . for 12 month</p>
              </div>
            </div>
          </div>

        </div>

      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />

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

      <Container class1="marquee-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className='d-flex'>
                <div className="mx-4 w-25">
                  <img src="" alt="" />
                </div>

                <div className="mx-4 w-25">
                  <img src="" alt="" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Our Latest Blogs
            </h3>
          </div>

        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />

          </div>
          <div className="col-3">
            <BlogCard />

          </div>

          <div className="col-3">
            <BlogCard />

          </div>
          <div className="col-3">
            <BlogCard />

          </div>
        </div>
      </Container>




    </>
  )
}

export default Home