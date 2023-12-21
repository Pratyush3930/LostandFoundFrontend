import React from "react";
import { useState } from "react";
import Item from "../../components/items/Item";
import "./Items.css";
import { Navbar, SearchBar } from "../../components";
import ItemInfo from "../itemInfo/itemInfo";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import { useContext } from "react";

const Items = ({ data, showItemInfo, setShowItemInfo }) => {
  const { loggedIn } = useContext(AppContext);
  const [showItem, setShowItem] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    setInputValue(e.target.value);
  };

  const itemDetails = (item) => {
    setShowItemInfo(true);
    setShowItem(item);
  };

  return (
    <div className="found__Items">
      <Navbar />
      {!showItemInfo && (
        <div className="found__Items-bod">
          <div className="found__Items-bod__features">
            <h1>Item List</h1>
            {!loggedIn && (
              <button
                onClick={() => window.alert("Please login first to continue!")}
              >
                Add Item
              </button>
            )}
            {loggedIn && (
              <Link to="/addItem">
                <button>Add Item</button>
              </Link>
            )}
          </div>
          <div className="searchBar">
            <SearchBar handleSearch={handleSearch} />
          </div>
          <div className="dashboard-grid">
            {!inputValue && (
              <>
                {data.map((item) => (
                  <div key={item.id} onClick={() => itemDetails(item)}>
                    <Item
                      key={item.id}
                      name={item.item_name}
                      location={item.location}
                      image={`http://localhost:8000/static${item.image}`}
                      //setting the default path as api path and then combining it with image path from database
                    />
                  </div>
                ))}
              </>
            )}
            {inputValue && (
              <>
                {data
                  .filter((item) =>
                    item.item_name
                      .toLowerCase()
                      .includes(inputValue.toLowerCase())
                  )
                  .map((item) => (
                    <div key={item.id} onClick={() => itemDetails(item)}>
                      <Item name={item.item_name} location={item.location} />
                    </div>
                  ))}
                {data.length > 0 && // Check if any items match the search criteria
                  data.filter((item) =>
                    item.item_name
                      .toLowerCase()
                      .includes(inputValue.toLowerCase())
                  ).length === 0 && <p className="error">No items found</p>}
              </>
            )}
          </div>
        </div>
      )}
      {showItemInfo && <ItemInfo data={showItem} />}
    </div>
  );
};

export default Items;
