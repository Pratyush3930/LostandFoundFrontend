import React from 'react'
import { useState } from 'react'
import Item from '../../components/items/Item'
import './Items.css'
import { Navbar } from '../../components';
import ItemInfo from '../itemInfo/itemInfo';
import { Link } from 'react-router-dom';

const Items = ({ data, showItemInfo, setShowItemInfo, handleAddItem }) => {

    const [showItem, setShowItem] = useState([]);
    const itemDetails = (item) => {
        setShowItemInfo(true);
        setShowItem(item);
    }

    return (
        <div className='found__Items'>
            <Navbar />
            {!showItemInfo &&
                <div className='found__Items-bod'>
                    <div className='found__Items-bod__features'>
                        <h1>Item List</h1>
                        <Link to='/addItem' >
                            <button>Add Item</button>
                        </Link>
                    </div>
                    <div className='found__Items-bod__itemList '>
                        {data.map((item) => (
                            <div onClick={() => itemDetails(item)}>
                                {console.log(item)}
                                <Item
                                    key={item.id}
                                    name={item.item_name}
                                    location={item.location}
                                />
                            </div>
                        ))}
                    </div>
                </div>}
            {showItemInfo &&
                <ItemInfo
                    data={showItem}
                />
            }
        </div>
    )
}

export default Items