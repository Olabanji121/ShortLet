import React from "react";
import Services from "../components/Services";
import Featured from "../components/features/index";
import FeaturedRooms from "../components/FeaturedRooms";
import HowitWorks from '../components/HowitWorks';

const Home = () => {
  return (
    <>
      <div
        className="app"
        // style={{ height: "1500px", background: "cornflowerblue" }}
      >
        <Featured />
        <FeaturedRooms/>
        <Services/>
        <HowitWorks/>
       
      </div>
    </>
  );
};

export default Home;
