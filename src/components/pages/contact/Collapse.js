import React from "react";
import Contct from "../../../assets/images/contact-btn.png";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <div className="contact-popup">
        <button
          className="btn contact-btn"
          type="button"
          onClick={function () {
            this.setState({ open: !this.state.open });
          }.bind(this)}
        >
          <img src={Contct} alt="" />
        </button>

        <div
          className={
            this.state.open ? "panel-collapse" : "panel-collapse panel-close"
          }
          id="collapseExample"
        >
          <div className="card card-body bubble">
            <form>
              <div className="form-group">
                <p>
                  Sit down with our experts to receive a free customized
                  marketing plan for your business + Learn How To Use Google and
                  Facebook to get 5000% ROI or more
                </p>
                <input
                  type="text"
                  className="form-control"
                  placeholder="You Name"
                />

                <input
                  type="text"
                  className="form-control"
                  placeholder="Contact Number"
                />

                <input
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                />

                <button type="submit" className="btn work-btn">
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
