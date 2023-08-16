import React from "react";
import Banner from "../components/Banner/Banner";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <LeftSidebar />
      </div>
    </>
  );
};

export default Home;
