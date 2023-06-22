import React from "react";
import "./Page1.css"
import img1 from "./assets/img1.jpg"
import { BsArrowRightShort } from "react-icons/bs";

function Page1() {
  return (
    <div className="container1">
      <div className="para1">
        <h1 style={{margin:"2rem", marginTop:"-20rem"}}>Aesop</h1>
        <div className="left-para">
          <p  style={{fontWeight:"700"}}>Supporting City Skin</p>
          <p  style={{fontSize:"30px",fontWeight:"500"}}>Parsley Seed Anti-Oxidant Intense Serum</p>
          <p >
            Explore how this anti-oxidant-rich serum hydrates, replenishes and
            fortifies the skin via a suite of ingredients selected with urban
            dwellers in mind.
          </p>
          <button className="discover">Discover the Formulation <BsArrowRightShort size={25}/></button>
        </div>
      </div>
      <div style={{width:"100%"}}>
        <img className="img1" src={img1} alt="img1"/>
      </div>
    </div>
  );
}

export default Page1;
