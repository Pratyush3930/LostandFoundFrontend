import React from 'react'
import { Navbar } from '../../components'
import './AddItem.css'


const AddItem = () => {
  return (
    <div className='found__addItem'>
      <Navbar />
      <div className='found__addItem-body'>
        <h1>Enter the description of the lost item below</h1>
        <form action="/addItem" method="post">
          <div className='partition'>
            <label htmlFor="itemName">Item Name:</label>
            <input type="text" id='itemName' name='itemName' placeholder='Enter name of item' className='form-element form-margin' required/>
          </div>
          <div className='partition'>
            <label htmlFor="location">Lost location:</label>
            <input type="text" id='location' name='location' placeholder='Enter the location it was lost' className='form-element form-margin' required/>
          </div>
          <div className='partition'>
            <label htmlFor="ownerName">Name of the owner:</label>
            <input type="text" id='ownerName' name='ownerName' className='form-element form-margin' placeholder='Enter owners name' required/>
          </div>
          <div className='partition'>
            <label htmlFor="contact">Contact info:</label>
            <input type="number" id="contact" name='contact' className='form-element form-margin' placeholder='Enter contact details' required />
          </div>
          <div className='partition'>
            <label htmlFor="additionalInfo">Additional information of item:</label>
            <input type="text" id="additionalInfo" name='additionalInfo' className='form-element form-margin' placeholder='Enter any item description'/>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddItem