import React from 'react'
import './Body.css';
import img1 from '../../images/website_images/searching1.jpg';
import img2 from '../../images/website_images/searching2.jpg';
import { Item } from '../../components';

const Body = () => {
    return (
        <div className='found__body'>
            <div className='found__body-getstarted'>
                <div className='found__body-getstarted-img1'><img src={img1} alt="Searching" /></div>
                <div className='found__body-getstarted-text'>
                    <h1>Lost Something?</h1>
                    <h3>Find the item you lost in here.</h3>
                    <p><a href="/">Login</a> or <a href="/">Signup</a> to get started.</p>
                </div>
                <div className='found__body-getstarted-img2'><img src={img2} alt="Searching" /></div>
            </div>
            <div className="found__body-lostItems section__margin">
                <div className="found__body-lostItems-header">
                    <h1>Lost Items</h1>
                </div>
                <div className='found__body-lostItems-itemList'>
                    <Item />
                </div>
            </div>
            <div className="found__body-foundItems section__margin">
                <div className="found__body-foundItems-header">
                    <h1>Found Items</h1>
                </div>
                <div className='found__body-foundItems-itemList'>
                    <Item />
                </div>
            </div>
        </div>
    )
}

export default Body