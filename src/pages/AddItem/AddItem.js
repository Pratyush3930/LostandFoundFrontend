import React from 'react'
import { Navbar } from '../../components'
import './AddItem.css'
import { useNavigate } from 'react-router-dom'

const AddItem = ({handleAddItem}) => {
  const navigate = useNavigate();
  return (
    <div className='found__addItem'>
      <Navbar />
      <div className='found__addItem-body'>
        <h1>Enter the description of the lost item below</h1>
        <form action="/addItem" method="post" onSubmit={(e) => handleAddItem(e , navigate)} encType="multipart/form-data">
          <div className='partition'>
            <label htmlFor="itemName">Item Name:</label>
            <input type="text" id='itemName' name='itemName' placeholder='Enter name of item' className='form-element form-margin' required />
          </div>
          <div className='partition'>
            <label htmlFor="location">Lost location:</label>
            <input type="text" id='location' name='location' placeholder='Enter the location it was lost' className='form-element form-margin' required />
          </div>
          <div className='partition'>
            <label htmlFor="lost_date">Date lost:</label>
            <input type="date" id='lost_date' name='lost_date'  className='form-element form-margin' required />
          </div>
          <div className='partition'>
            <label htmlFor="ownerName">Name of the owner:</label>
            <input type="text" id='ownerName' name='ownerName' className='form-element form-margin' placeholder='Enter owners name' required />
          </div>
          <div className='partition'>
            <label htmlFor="contact">Contact info:</label>
            <input type="text" id="contact" name='contact' className='form-element form-margin' placeholder='Enter contact details' required />
          </div>
          <div className='partition'>
            <label htmlFor="additionalInfo">Question:</label>
            <input type="text" id="additionalInfo" name='additionalInfo' className='form-element form-margin' placeholder='Enter a question based on the item'/>
          </div>
          <div className='partition'>
            <label htmlFor="image">Choose an image:</label>
            <input type="file" id="image" name='image' className='form-margin' accept='image/png,image/jpg,image/jpeg' required />
          </div>
          <div className='addItem-btn'>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddItem