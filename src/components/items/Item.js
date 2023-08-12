import React from 'react'
import noimg from '../../images/website_images/noimg.jpg'
import './Item.css'

const Item = (props) => {
  return (
    <div  className='found__body-Items-itemList'>
      <div className='found__body-Items-itemList_img'>
        <img src={noimg} alt="No visual description" />
      </div>
      <div className='found__body-Items-itemList_desc'>
        <p>Name: {props.name}</p>
        <p>Locations: {props.location}</p>
      </div>
        
        
    </div>
  )
}

export default Item