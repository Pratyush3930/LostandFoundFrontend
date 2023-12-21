import React from 'react'
// import noimg from '../../images/website_images/noimg.jpg'
// import iphone from '../../images/item_images/apple.jpg';
import './Item.css'

const Item = (props) => {
  return (
    <div  className='found__body-Items-itemList'>
      <div className='found__body-Items-itemList_img'>
        <img src={props.image} alt="No visual description" height={300} width={200} style={{objectFit: 'fill'}}/>
      </div>
      <div className='found__body-Items-itemList_desc'>
        <p>Name: {props.name}</p>
        <p>Locations: {props.location}</p>
      </div>
    </div>
  )
}

export default Item