import React from "react";
import Carousel from "./Carousel";

import {Link} from "react-router-dom"

const Featured = () => {
  return (
    <div  style={{ position: "relative" }}>
      <Carousel />
      <div className="hero-word col-10 mx-auto col-md-6 col-lg-4 text-center ">
        <h3 className=" ft text-light text-capitalize">Your one stop web Platfrom for short let apartments.</h3>
        {/* <p className=" text-light">Rent  Short  Let  Apartments  with  Ease....</p> */}
        <div className="reg">
          
            <Link to="/register" className= "text-uppercase btn btn-primary2  mt-3" >Register</Link>
        
          </div>
         <div className="login ml-3">
         
            <Link to="/login" className= "text-uppercase btn btn-primary3 ft2 mt-3" >Login</Link>
            
         </div>
      </div>
      
    </div>
  );
};

export default Featured;
