import React, { useContext, useState } from "react";
import "./itemInfo.css";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const ItemInfo = ({ data }) => {
  const {
    userId,
    handleDelete,
    handleStatusChange,
    handleNotif,
    userData,
    notifData,
  } = useContext(AppContext);
  const [answer, setAnswer] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  const isoDate = data.date;

  const dateObj = new Date(isoDate); // Create a Date object from the ISO string

  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Month is zero-indexed
  const day = String(dateObj.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  // below function to call two other functions at once
  const handleButtonClick = (
    s,
    item_id,
    userlost_id,
    userfound_id,
    question,
    userlost_name,
    userlost_contact
  ) => {
    handleStatusChange(s, item_id);
    handleNotif(
      item_id,
      userlost_id,
      userfound_id,
      question,
      answer,
      userlost_name,
      userlost_contact,
      userData.name
    );
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="found__itemInfo">
      <h1 className="user-header">Item Information</h1>
      <hr className="line" />
      <div className="found_itemInfo-section">
        {data.image && (
          <div className="found_itemInfo-img">
            <img src={`http://localhost:8000/static${data.image}`} alt="" />
          </div>
        )}
        <div
          className="userInfo"
          style={{ gridTemplateColumns: "1fr 1fr", textWrap: "wrap" }}
        >
          <div className="userInfo_section">
            <h2>Item name:</h2>
            <p>{data.item_name}</p>
          </div>
          <div className="userInfo_section">
            <h2>Date Lost:</h2>
            <p>{formattedDate}</p>
          </div>
          <div className="userInfo_section">
            <h2>Location:</h2>
            <p>{data.location}</p>
          </div>
          <div className="userInfo_section">
            <h2>Person's name:</h2>
            <p>{data.name}</p>
          </div>
          {/* <div className="userInfo_section">
            <h2>Contact details:</h2>
            <p>{data.contact}</p>
          </div> */}
          <div className="userInfo_section">
            <h2>Question:</h2>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
      <div className="found__itemInfo-btn">
        {userId === data.uid && (
          <>
            <button
              className="login_btn"
              style={{ backgroundColor: "rgb(220 71 71)", width: "8rem" }}
              onClick={() => handleDelete(navigate)}
            >
              Delete
            </button>
            {/* <button
              className="login_btn"
              style={{ backgroundColor: "blue", width: "8rem" }}
            >
              Update
            </button> */}
          </>
        )}

        {userId !== data.uid && (
          <>
            <button
              onClick={() => handleOpen()}
              className="login_btn"
              style={{ width: "8rem" }}
            >
              Item Found
            </button>
          </>
        )}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h2>Answer the question asked by the owner of lost item:</h2>
            <h3>{data.description}</h3>
            <input
              type="text"
              id="answer"
              name="answer"
              placeholder="Your Answer"
              onChange={(e) => handleAnswerChange(e)}
            />
            <button
              onClick={() =>
                handleButtonClick(
                  0,
                  data.id,
                  data.uid,
                  userId,
                  data.description,
                  data.name,
                  data.contact
                )
              }
            >
              Submit Answer
            </button>
          </Box>
        </Modal>
      </div>
      {/* To check if the user who lost the item has a notification and display the response below */}
      {userId === data.uid && userId === notifData[0]?.userlost_id && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "grey",
            width: "100%",
            flexDirection: "column",
            rowGap: "10px",
          }}
        >
          <h2>
            Responses
            <hr className="line" />
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "flexStart",
              flexDirection: "column",
            }}
          >
            <p> Username: {notifData[0]?.userfound_name}</p>
            <p> Answer: {notifData[0]?.answer}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemInfo;
