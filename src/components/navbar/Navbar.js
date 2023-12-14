import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../images/website_images/findit.png";
import { AppContext } from "../../App";
import { useContext } from "react";
import user from "../../images/navbar_images/user.png";
import help from "../../images/navbar_images/help.png";
import profile from "../../images/navbar_images/profile.png";
import setting from "../../images/navbar_images/setting.png";
import logout from "../../images/navbar_images/logout.png";
import { useState } from "react";

const Navbar = () => {
  const { loggedIn, userData, handleLogOut, setShowItemInfo } =
    useContext(AppContext);
  const [dropdown, setDropDown] = useState(false);
  const toggleMenu = () => {
    if (!dropdown) {
      setDropDown(true);
    } else {
      setDropDown(false);
    }
  };
  return (
    <div className="found__navbar">
      <div className="found__navbar-links">
        <div className="found__navbar-links_logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="found__navbar-links_container">
          {/* <p><a href="">Home</a></p>
                <p><a href="">Lost Items</a></p>
                <p><a href="">Found Items</a></p> */}
          <div></div>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/items">
            <p onClick={() => setShowItemInfo(false)}>Lost Items</p>
          </Link>
        </div>
      </div>
      {!loggedIn && (
        <div className="found__navbar-sign">
          <Link to="/login">
            <p>Sign in</p>
          </Link>
          <Link to="/register">
            <button className="btn">Sign up</button>
          </Link>
        </div>
      )}

      {loggedIn && (
        <>
          <img
            src={user}
            alt="userImage"
            className="found__navbar-userInfo"
            onClick={toggleMenu}
          />
          <div
            className={dropdown ? "open-menu" : "sub-menu-wrap"}
            id="subMenu"
          >
            <div className="sub-menu">
              <div className="user-info">
                <img src={user} alt="" />
                <h2>{userData.name.toUpperCase()}</h2>
              </div>
              <hr />
              <a href="/userInfo" className="sub-menu-link">
                <img src={profile} alt="" />
                <p>Edit Profile</p>
                <span>{`>`}</span>
              </a>
              <a href="/items" className="sub-menu-link">
                <img src={setting} alt="" />
                <p>Settings & Privacy</p>
                <span>{`>`}</span>
              </a>
              <a href="/" className="sub-menu-link">
                <img src={help} alt="" />
                <p>Support</p>
                <span>{`>`}</span>
              </a>
              <a href="/" className="sub-menu-link" onClick={handleLogOut}>
                <img src={logout} alt="" />
                <p>Logout</p>
                <span>{`>`}</span>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
