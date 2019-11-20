import React from "react";
import Services from "../components/Services";
import Featured from "../components/features/index";
import FeaturedRooms from "../components/FeaturedRooms";

const Home = () => {
  return (
    <>
      <div
        className="app"
        // style={{ height: "1500px", background: "cornflowerblue" }}
      >
        <Featured />
        <Services/>
        <FeaturedRooms/>
      </div>
    </>
  );
};

export default Home;
