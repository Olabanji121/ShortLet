import React from "react";
import Carousel from "./Carousel";
import Button from "@material-ui/core/Button";

const Featured = () => {
  return (
    <div  style={{ position: "relative" }}>
      <Carousel />
      <div className="artist_name col-10 mx-auto col-md-6 col-lg-4 text-center ">
        <h1 className="x-large text-light">SHORT LET</h1>
        <p className="lead text-light">Renting Short Let Apartments with ease....</p>
        <div className="reg">
          <Button variant="contained" color="primary">
            Register
          </Button>
          </div>
         <div className="login ml-3">
         <Button variant="contained" color="primary">
            Login
          </Button>  
         </div>
      </div>
      
    </div>
  );
};

export default Featured;
