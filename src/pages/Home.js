import React from "react";
import Services from "../components/Services";
import Featured from "../components/features/index";

const Home = () => {
  return (
    <>
      <div
        className="app"
        // style={{ height: "1500px", background: "cornflowerblue" }}
      >
        <Featured />
        <Services/>
      </div>
    </>
  );
};

export default Home;
