import React from "react";

export default function Footer() {
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
                      <a className="active" href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="foot-subs text-center">
                  <p>
                    Subscribe to our newsletter to stay update with what is new
                  </p>
                  <input
                    type="email"
                    className="form-control offsetss"
                    placeholder="Email Adress"
                    aria-label="email"
                    aria-describedby="basic-addon1"
                  />
                  <button type="submit" className="btn sub-btn">
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
              Copyright ©{" "}
              <script>document.write(new Date().getFullYear())</script> Business
              | Powered by <a href="http://codestrickz.xyz">CodesTrickz</a> |
              Designed BY <a href="http://wapborhan.com">Borhan Uddin</a>
            </h3>
          </div>
        </div>
      </section>
    </footer>
  );
}
