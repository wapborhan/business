import React, { Component, Fragment } from "react";
import Time from "react-time";
import BackToTop from "react-custom-back-to-top-button";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithubAlt,
} from "react-icons/fa";

export default class Footer extends Component {
  render() {
    let now = new Date();

    return (
      <footer>
        <section id="footer">
          <div className=" main-foot">
            <div className="container">
              <div className="row text-center">
                <div className="col-lg-12 foot-head">
                  <h2>Get In Touch</h2>
                  <div className="foot-social">
                    <ul>
                      <li>
                        <a href="#">
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaLinkedinIn />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaGithubAlt />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="foot-subs text-center">
                    <p>
                      Subscribe to our newsletter to stay update with what is
                      new
                    </p>
                    <input
                      type="email"
                      className="form-control m-auto text-center"
                      placeholder="Email Adress"
                    />
                    <button type="submit" className="btn sub-btn mt-5">
                      Submit Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row foot-credit">
            <div className="col-lg-12">
              <h3>
                Copyright © <Time value={now} format="YYYY" /> Business |
                Designed BY{" "}
                <a className="text-info" href="http://srdreamlab.com">
                  SR Dream Lab
                </a>
              </h3>
            </div>
          </div>
        </section>
        <Fragment>
          <BackToTop />
        </Fragment>
      </footer>
    );
  }
}
