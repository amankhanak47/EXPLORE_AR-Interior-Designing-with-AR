import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = ({ opt }) => {
  return (
    <div className="navbar">
      <div className="left_nav">
        <Link to={"/"}>
          <img
            src="https://play-lh.googleusercontent.com/26DW6Mdb0QRHnzVzGlRRgmdjVBohbWzccFhAedwEhQXTPyqhyX79hy_KZmGEhsscjA"
            alt=""
          />
        </Link>
        <p>{opt}</p>
      </div>
      <div className="right_nav">
        <Link to={"/interior"}>
          <button className="nav_btns">Interior</button>
        </Link>
        <Link to={"/education"}>
          <button className="nav_btns">Education</button>
        </Link>
        <Link to={"/fun"}>
          <button className="nav_btns">Fun</button>
        </Link>
        <input placeholder="Search *" type="text" />
      </div>
    </div>
  );
};

export default Navbar;
