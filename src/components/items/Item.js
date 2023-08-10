import React from 'react'
import noimg from '../../images/website_images/noimg.jpg'
import './Item.css'

const Item = () => {
  return (
    <div  className='found__body-Items-itemList'>
      <div className='found__body-Items-itemList_img'>
        <img src={noimg} alt="No visual description" />
      </div>
      <div className='found__body-Items-itemList_desc'>
        <p>Item name: Nokia mobile</p>
        <p>Locations: Kalanki</p>
      </div>
        
        
    </div>
  )
}

export default Item