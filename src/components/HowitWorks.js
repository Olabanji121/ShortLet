import React from "react";
import Iphone from "../resources/images/useiphone.jpg";
import Title from "../components/Title";

const HowitWorks = () => {
  return (
      <section className="mt-5">
       <Title title={"HOW IT WORKS"} styleClass={"section-title"} />
    <div className="how-center ">
        
      <div className="mx-auto">
        <img src={Iphone} alt="phone view" className="phone" />
      </div>
      <div className="col-6">
          <h1>hello world</h1>
      </div>
    </div>
      </section>
   
  );
};

export default HowitWorks;
