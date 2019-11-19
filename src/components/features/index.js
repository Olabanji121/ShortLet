import React from "react";
import Carousel from "./Carousel";

import {Link} from "react-router-dom"

const Featured = () => {
  return (
    <div  style={{ position: "relative" }}>
      <Carousel />
      <div className="artist_name col-10 mx-auto col-md-6 col-lg-4 text-center ">
        <h1 className="x-large text-light">SHORT LET</h1>
        <p className="lead text-light">Rent  Short  Let  Apartments  with  Ease....</p>
        <div className="reg">
          
            <Link to="/register" className= "text-uppercase btn btn-warning  mt-3" >Register</Link>
        
          </div>
         <div className="login ml-3">
         
            <Link to="/register" className= "text-uppercase btn btn-warning  mt-3" >Login</Link>
            
         </div>
      </div>
      
    </div>
  );
};

export default Featured;
