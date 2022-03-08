import React from "react";
import Content from "./Collapse";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12 contact-head">
            <h2>Get Your Free Facebook Analysis Now</h2>
            <h3>Enter your details below</h3>

            <Content />
          </div>
        </div>
      </div>
    </section>
  );
}
