import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/website_images/findit.png";
import { AppContext } from "../../App";
import { useContext } from "react";
import user from "../../images/navbar_images/user.png";
import profile from "../../images/navbar_images/profile.png";
import logout from "../../images/navbar_images/logout.png";
import Popover from "@mui/material/Popover";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import * as React from "react";

//     {/* {
//     position: relative;
//     right: -5px;
//     font-weight: 700;
//     font-size: 16px;
//     color: red;
//     top: 6px;
//     overflow: hidden;
//     font-family: fantasy;
// } */} this is for the notification number count if needed
const Navbar = () => {
  const {
    loggedIn,
    userData,
    handleLogOut,
    setShowItemInfo,
    data,
    userId,
    notifData,
    handleAccept,
    handleReject,
    itemAccept,
  } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorNoti, setAnchorNoti] = React.useState(null);

  const handleClickNoti = (event) => {
    setAnchorNoti(event.currentTarget);
  };

  const handleCloseNoti = () => {
    setAnchorNoti(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openNoti = Boolean(anchorNoti);
  const idNoti = openNoti ? "simple-popover" : undefined;

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
        <div>
          <div className="notification">
            <div className="noti">
              {userId !== notifData[0]?.userlost_id && (
                <NotificationsIcon onClick={handleClickNoti} />
              )}
              {userId === notifData[0]?.userlost_id && (
                <NotificationImportantIcon onClick={handleClickNoti} />
              )}
              <div>
                {/* <p>1</p> */}

                <Popover
                  id={idNoti}
                  open={openNoti}
                  anchorEl={anchorNoti}
                  onClose={handleCloseNoti}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <div className="notif-body">
                    <h2 className="noti-header">Notifications</h2>

                    <hr className="line" />
                    {notifData instanceof Object && !itemAccept &&(
                      <>
                        <p>
                          A user with username {notifData[0]?.userfound_name}{" "}
                          found your {notifData[0]?.item_name}.
                        </p>
                        <p>
                          Their answer to your "{notifData[0]?.question}"
                          question was "{notifData[0]?.answer}".
                        </p>
                        <p>Would you like to accept the item?</p>
                        <div className="two_btn">
                          <button
                            className="login_btn"
                            onClick={() => {
                              handleAccept(notifData[0].id);
                            }}
                          >
                            Accept
                          </button>
                          <button
                            className="login_btn"
                            onClick={() => {
                              handleReject(notifData[0]?.id);
                            }}
                          >
                            Reject
                          </button>
                        </div>
                      </>
                    )}
                    {!(notifData instanceof Object) && !itemAccept && (
                      <>
                        <p className="error">No new notifications!</p>
                      </>
                    )}
                    {(notifData instanceof Object) && itemAccept && notifData[0].accept (
                      <p>
                        Thank you for accepting the lost item. Kindly wait for
                        the user to contact you.{" "}
                      </p>
                    )}
                  </div>
                </Popover>
              </div>
              {/* )} */}
            </div>
            <img
              src={user}
              alt="userImage"
              className="found__navbar-userInfo"
              onClick={handleClick}
            />
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <div className="sub-menu">
                <div className="user-info">
                  <img src={user} alt="" />
                  <h2>{userData.name}</h2>
                </div>
                <hr />
                <a href="/userInfo" className="sub-menu-link">
                  <img src={profile} alt="" />
                  <p>Your Profile</p>
                  <span>{`>`}</span>
                </a>
                <a href="/" className="sub-menu-link" onClick={handleLogOut}>
                  <img src={logout} alt="" />
                  <p>Logout</p>
                  <span>{`>`}</span>
                </a>
              </div>
            </Popover>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
