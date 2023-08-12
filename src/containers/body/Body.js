import React from 'react'
import './Body.css';
import img1 from '../../images/website_images/searching1.jpg';
import img2 from '../../images/website_images/searching2.jpg';
import { Item } from '../../components';
import { axiosPrivate } from '../../utils/axios';
import { useEffect , useState } from 'react';


const Body = (props) => {
    const [data, setData] = useState([]);
    const [slicedData, setSlicedData] = useState([]);

    const getData = async () => {
        const res = await axiosPrivate.get("/api/items")
        console.log(res.data);
        setData(res.data);
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        // Slice the data when it is fetched or changes
        const startIndex = 0; // Index to start slicing from
        const endIndex = 4;   // Index to end slicing (exclusive)
    
        if (data.length > 0) {
          setSlicedData(data.slice(startIndex, endIndex));
        }
      }, [data]);

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
                    {slicedData.map((item) => (
                        <Item
                            key={item.id}
                            name={item.item_name}
                            location={item.location}
                        />
                    ))}
                </div>
            </div>
            <div className="found__body-foundItems section__margin">
                <div className="found__body-foundItems-header">
                    <h1>Found Items</h1>
                </div>
                <div className='found__body-foundItems-itemList'>
                {slicedData.map((item) => (
                        <Item
                            key={item.id}
                            name={item.item_name}
                            location={item.location}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Body