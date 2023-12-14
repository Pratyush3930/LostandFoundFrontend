import React from "react";
import "./User.css";
import { Navbar } from "../../components";
import { useContext } from "react";
import { AppContext } from "../../App";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Item } from "../../components";
import ItemInfo from "../itemInfo/itemInfo";
import { useState } from "react";

const User = ({
  handleInfoUpdate,
  handleNewPasswordChange,
  validPass,
  passwordMatch,
}) => {
  const { userData, data, userId, setShowItemInfo, showItemInfo } =
    useContext(AppContext);
  const [open, setOpen] = React.useState(false);
  const [openPass, setOpenPass] = React.useState(false);
  const [showItem, setShowItem] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenPass = () => setOpenPass(true);
  const handleClosePass = () => setOpenPass(false);

  //   console.log("sdfsdl", data);
  console.log("user id", userId);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    bgcolor: "rgb(238, 234, 234)",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const itemDetails = (item) => {
    setShowItemInfo(true);
    setShowItem(item);
  };

  return (
    <div className="userInformation">
      <Navbar />
      {!showItemInfo && (
        <>
          <div className="user">
            <h2>User Information</h2>
            <div className="userInfo">
              <div className="userInfo_section">
                <p>Username:</p>
                <div>{userData.name}</div>
              </div>
              <div className="userInfo_section">
                <p>Address:</p>
                <div>{userData.address}</div>
              </div>
              <div className="userInfo_section">
                <p>Email:</p>
                <div>{userData.email}</div>
              </div>
              <div className="userInfo_section">
                <p>Phone Number:</p>
                <div>{userData.number}</div>
              </div>
              {/* <div className='userInfo_section'>
                        <p>Date Joined:</p>
                        <div>{userData.name}</div>
                    </div> */}
            </div>
            <div className="password_change">
              <button className="password_btn" onClick={handleOpen}>
                {/* <Link to='/UpdateInfo'> */}
                {/* onClick={handleInfoChange} */}
                Update Information
                {/* </Link> */}
              </button>
              <button className="password_btn" onClick={handleOpenPass}>
                Change Password
              </button>

              <div>
                <Modal
                  open={open}
                  onClose={handleClose}
                  handleInfoUpdate={handleInfoUpdate}
                >
                  <Box sx={style} handleInfoUpdate={handleInfoUpdate}>
                    <div className="user" style={{ margin: "0" }}>
                      <h2 style={{ margin: "0" }}> Update Information</h2>
                    </div>
                    <form
                      className="userInfo"
                      onSubmit={(e) => handleInfoUpdate(e)}
                    >
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Username"
                        className="updateInfo"
                      />
                      <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Address"
                        className="updateInfo"
                      />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="updateInfo"
                      />
                      <input
                        type="text"
                        id="number"
                        name="number"
                        placeholder="Phone Number"
                        className="updateInfo"
                      />
                      {/* <input type="date" id='date' name='date' placeholder='Date' className='updateInfo' /> */}
                      <button
                        type="submit"
                        className="password_btn"
                        style={{
                          gridColumn: " span 2",
                          justifySelf: "center",
                        }}
                      >
                        Confirm Change
                      </button>
                    </form>
                  </Box>
                </Modal>
              </div>
              <div>
                <Modal open={openPass} onClose={handleClosePass}>
                  <Box sx={style}>
                    <div className="user" style={{ margin: "0" }}>
                      <h2 style={{ margin: "0" }}>Change Password</h2>
                    </div>
                    <form
                      action="/submit"
                      method="POST"
                      onSubmit={(e) => handleNewPasswordChange(e)}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Old password"
                        className="updateInfo"
                      />
                      <input
                        type="password"
                        id="new_pass"
                        name="new_pass"
                        placeholder="New password"
                        className="updateInfo"
                      />
                      <input
                        type="password"
                        id="retype_new_pass"
                        name="retype_new_pass"
                        placeholder="Confirm new password"
                        className="updateInfo"
                      />
                      {!passwordMatch && (
                        <p className="error">The passwords do not match!</p>
                      )}
                      {!validPass && (
                        <p className="error">The passwords is too short!</p>
                      )}
                      <button className="password_btn">Confirm Change</button>
                    </form>
                  </Box>
                </Modal>
              </div>
            </div>
          </div>
          <div className="userInformation-items">
            <div className="userInformation-items_heading">
              <h2>Your uploaded items</h2>
            </div>
            <div className="userInformation-items_iteminfo">
              {data?.map((item) => {
                if (userId === item.uid) {
                  return (
                    <div onClick={() => itemDetails(item)}>
                      <Item
                        key={item.id}
                        name={item.item_name}
                        location={item.location}
                      />
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </>
      )}
      {showItemInfo && <ItemInfo data={showItem} />}
    </div>
  );
};

export default User;
