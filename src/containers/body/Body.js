import React from 'react'
import './Body.css';
import img1 from '../../images/website_images/searching1.jpg';
import img2 from '../../images/website_images/searching2.jpg';
import { Item } from '../../components';
import { useEffect, useState } from 'react';


const Body = (props) => {
    const [slicedData, setSlicedData] = useState([]);

    useEffect(() => {
        // Slice the data when it is fetched or changes
        const startIndex = 0; // Index to start slicing from
        const endIndex = 4;   // Index to end slicing (exclusive)

        if ((props.data).length > 0) {
            setSlicedData((props.data).slice(startIndex, endIndex));
        }
    }, [props.data]);



    return (

        <div className='found__body'>

            <div className='found__body-getstarted'>
                <div className='found__body-getstarted-img1'><img src={img1} alt="Searching" /></div>
                <div className='found__body-getstarted-text'>
                    {!props.loggedIn &&
                        <>
                            <h1>Lost Something?</h1>
                            <h3>Find the item you lost in here.</h3>
                            <p><a href="/login">Login</a> or <a href="/register">Signup</a> to get started.</p>
                        </>
                    }
                    {props.loggedIn && 
                        <>
                            <h1>Welcome to FIND IT</h1>
                            <p>A place to find your lost belongings.</p>
                        </>
                    }
                </div>
                <div className='found__body-getstarted-img2'><img src={img2} alt="Searching" /></div>
            </div>
            <div className="found__body-lostItems" >
                <div className="found__body-lostItems-header">
                    <h1>Lost Items</h1>
                </div>
                <div className='dashboard-grid'>
                    {slicedData.map((item) => (
                        <Item
                            key={item.id}
                            name={item.item_name}
                            location={item.location}
                        image={`http://localhost:8000/static${item.image}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Body