import React from "react";
import "./Page3.css";
import vid1 from "./assets/vid1.mp4";
import { BsArrowRightShort } from "react-icons/bs";
function Page3() {
  const videoKey = `${vid1}?key=${Date.now()}`;
  return (
    <div className="container3">
      <div className="vidpara" style={{gap:"15rem"}}>
        <div>
          <video
            className="video"
            autoPlay
            muted
            loop
            key={videoKey}
            style={{ width: "800px" }}
          >
            <source src={vid1} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div style={{ width: "100%",display:"flex",flexDirection:"column",alignItems:"flex-start" }}>
          <p style={{ fontWeight: "700" }}>The Athenaeum</p>
          <p style={{ fontSize: "25px", fontWeight: "500" }}>
            Lessons from the lab
          </p>
          <p style={{width:"250px"}}>
            In this instalment of our ‘Under the Microscope’ series: a focus on
            anti-oxidant-rich skin care and its benefits to city-dwellers.
          </p>
          
          <button className="discover"> <span style={{marginRight:"3rem"}}>Read More</span> <BsArrowRightShort size={25}/> </button>
          
        </div>
      </div>
    </div>
  );
}

export default Page3;
