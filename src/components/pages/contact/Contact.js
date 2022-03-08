import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12 contact-head">
            <h2>Get Your Free Facebook Analysis Now</h2>
            <h3>Enter your details below</h3>
            <div className="contact-popup">
              <button
                className="btn contact-btn"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <img src="assets/images/contact-btn.png" alt="" />
              </button>

              <div className="collapse" id="collapseExample">
                <div className="card card-body bubble">
                  <form>
                    <div className="form-group">
                      <p>
                        Sit down with our experts to receive a free customized
                        marketing plan for your business + Learn How To Use
                        Google and Facebook to get 5000% ROI or more
                      </p>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="You Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Contact Number"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Company Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />

                      <button type="submit" className="btn work-btn">
                        Submit Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
