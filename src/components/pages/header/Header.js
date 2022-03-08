import React, { Component } from "react";
import Time from "react-time";
import {
  FaMobileAlt,
  FaRegEnvelope,
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

export default class Header extends Component {
  render() {
    let now = new Date();
    return (
      <section id="header">
        <div className="head-social">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                Today is{" "}
                <b>
                  <Time value={now} format="hh:mm A - DD-MMMM-YYYY" />
                </b>
              </div>
              <div className="col-lg-6">
                <div className="head-social-link d-flex justify-content-end">
                  <ul>
                    <li>
                      <a href=""></a>
                      <FaMobileAlt /> 6337 3128
                    </li>
                    <li>
                      <a href=""></a>
                      <FaRegEnvelope /> info@business.co
                    </li>
                    <li>
                      <a href=""></a>
                      <FaFacebookSquare />
                    </li>
                    <li>
                      <a href=""></a>
                      <FaTwitterSquare />
                    </li>
                    <li>
                      <a href=""></a>
                      <FaGithubSquare />
                    </li>
                    <li>
                      <a href=""></a>
                      <FaLinkedin />
                    </li>
                    <li>
                      <a href=""></a>
                      <FaInstagramSquare />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <nav className="navbar navbar-expand-lg main-menu ">
            <div className="nav-brand logo">
              <img src="images/logo.png" alt="logo" />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <img src="images/menu.svg" alt="" />
              </span>
            </button>
            <div
              className=" collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className=" menu ms-auto">
                <ul className=" navbar-nav menu-iteam">
                  <li>
                    <a className="active" href="">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <a href="#apporch">Our Apporch</a>
                  </li>
                  <li>
                    <a href="#work">Our Work</a>
                  </li>
                  <button className="head-btn">Free Consultation</button>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="head-slider">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner main-slider">
              <div className="carousel-item active">
                <img
                  src="images/slider/slider-1.jpg"
                  className="d-block w-100"
                  alt="slide-1"
                />
                <div className="carousel-caption ">
                  <h5>We Providing 1</h5>
                  <p>Social Media marketing for businesses</p>
                  <button>FREE CONSULTATION</button>
                </div>
              </div>

              <div className="carousel-item">
                <img
                  src="images/slider/slider-2.jpg"
                  className="d-block w-100"
                  alt="slide-2"
                />
                <div className="carousel-caption">
                  <h5>We Providing 2</h5>
                  <p>Social Media marketing for businesses</p>
                  <button>FREE CONSULTATION</button>
                </div>
              </div>

              <div className="carousel-item">
                <img
                  src="images/slider/slider-1.jpg"
                  className="d-block w-100"
                  alt="slide-3"
                />
                <div className="carousel-caption">
                  <h5>We Providing 3</h5>
                  <p>Social Media marketing for businesses</p>
                  <button>FREE CONSULTATION</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
