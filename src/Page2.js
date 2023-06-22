import React from "react";
import img2 from "./assets/img2.webp";
import img3 from "./assets/img3.webp";
import img4 from "./assets/img4.webp";
import "./Page2.css";
function Page2() {
  return (
    <div className="container2">
      {/* <div className="parrra2">
        <p>Parsley Seed Skin Care</p>
        <p>Fortification of the highest order</p>
        <p>
          Our Parsley Seed Skin Care range provides potent doses of anti-oxidant
          rich ingredients in formulations suited to all skin types. They are
          especially recommended for those in urban environments, to fortify the
          skin against the damaging effects of free radicals.
        </p>
      </div> */}

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
        style={{width:"flex1"}}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              className="imgset
      "
            >
              <img className="d-block w-100" src={img2} alt="First slide" />
              <img className="d-block w-100" src={img2} alt="First slide" />
              <img className="d-block w-100" src={img4} alt="Third slide" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="imgset">
              <img className="d-block w-100" src={img3} alt="Second slide" />
              <img className="d-block w-100" src={img2} alt="First slide" />
              <img className="d-block w-100" src={img4} alt="Third slide" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="imgset">
              <img className="d-block w-100" src={img4} alt="Third slide" />
              <img className="d-block w-100" src={img2} alt="First slide" />
              <img className="d-block w-100" src={img2} alt="First slide" />
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <hr/>
    </div>
  );
}

export default Page2;
