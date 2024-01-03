import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Navbar } from "../../components";
import { useContext } from "react";
import { AppContext } from "../../App";
import "./FoundItem.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgb(51, 181, 214)',
  boxShadow: 24,
  p: 4,
  borderRadius: '5px',
};

const FoundItem = () => {
  const { data, userFoundNotif } = useContext(AppContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Navbar />
      <div className="your_found_items">
        {userFoundNotif instanceof Object &&
          data.map((item) =>
            userFoundNotif.map((notif) => {
              return notif.item_id === item.id ? (
                <div className="new_component">
                  <div className="arrange_border">
                    <p>Item Name: {notif.item_name}</p>
                    <p>Question: {notif.question}</p>
                    <p>Your Answer: {notif.answer}</p>
                  </div>
                    <span>{notif.accept ? "accepted" : "pending"}</span>
                  <div className="btn-div">
                    {notif.accept
                      ? 
                      <button className="login_btn" onClick={handleOpen}>Contact</button>  
                      : null}
                  </div>
                  <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 className='acceptedContact'>Here is the contact number: </h2>
          <p className='acceptedContactNumber'>{item.contact}</p>
          <p className='footer_text'>Kindly call the owner and initiate the return of their item.</p>
        </Box>
      </Modal>
    </div>
                </div>
              ) : null;
            })
          )}
        {!(userFoundNotif instanceof Object) && (
          <div className="noFoundItems">
            <h2>You have not found any items at the moment.</h2>
          </div>
        )}
      </div>
    </>
  );

  //   return (
  //     <div>
  //         <Navbar/>
  //         <form action="">

  //         </form>
  //     </div>
  //   )
};

export default FoundItem;
