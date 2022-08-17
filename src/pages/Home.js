import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./home.css";

const Home = () => {
  return <div className="home">
    <Navbar opt={"Home"}/>
    <div className="home_box">
      <h1>Explore AR</h1>
      <p>
Augmented reality is a layer of digital objects and information like images, videos, 3D content, rendered over the real world. It is also referred to as the mixture of the virtual worlds and the real world. </p>
      <div className="btns">

      <Link to={"/interior"}><button> Interior</button></Link>
      <Link to={"/education"}><button> Education</button></Link>
      <Link to={"/fun"}><button> Fun</button></Link>
    
      </div>
    </div>
  </div>;
};

export default Home;

