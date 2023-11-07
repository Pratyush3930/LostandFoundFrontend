import React from 'react'
import './itemInfo.css'

const ItemInfo = ({data}) => {
  const isoDate = data.date; 

  const dateObj = new Date(isoDate); // Create a Date object from the ISO string

  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
  const day = String(dateObj.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;
  return (
    
    <div className='found__itemInfo'>
        <p>Item name: {data.item_name}</p>
        <p>Date Lost: {formattedDate}</p>
        <p>Location: {data.location}</p>
        <p>Person's name: {data.name}</p>
        <p>Contact details: {data.contact}</p>
        <p>Description: {data.item_name}</p>
    </div>
  )
}

export default ItemInfo