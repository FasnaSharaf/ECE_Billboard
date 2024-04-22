import React from "react";
import "../Styles/Landing.css";
function Landing() {
  return (
    <div className = 'wrapper'style={{ width: "90%", margin: "0 auto" }}>
      <div className="heading">
        ELECTRONICS AND COMMUNICATION DEPARTMENT BILLBOARD
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p className= 'desc' style={{ color: "white", margin: "auto auto" }}>
          EC billboard is an initiative by the current ECE branch representative
          Jonath Joshy to simplify the engineering life of the students in his
          branch. The key aim of the initiative is to provide resources to the
          students to enhance their academic life. The billboard focuses to
          uplift everyone of the department and offer a space where every one of
          EC department can feel home
        </p>
        <img src={"./image.png"} className="myImage"></img>
      </div>
    </div>
  );
}
export default Landing;
