import React, { useContext } from "react";
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext.jsx';
import FoodItem from "../FoodItem/FoodItem.jsx";

export default function FoodDisplay({ category }) {
    const { food_list } = useContext(StoreContext);

    return(
        <div className="food_display" id="food_display">
            <h2>Top dishes near you</h2>
            <div className="food_display_list">
                {food_list.map((item, index) => {
                    if (category==="All" || category === item.category) {
                        return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image }/>
                    }
                    
                })}
            </div>
        </div>
    )
}