import React, {useContext} from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext.jsx';

export default function FoodItem({id, name, price, description, image}) {

    
    // Importing the StoreContext to access cart items and functions
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext); 

  return (
    <div className='food_item'>
        <div className="food_item_img_container">
            <img className='food_item_image' src={image} alt="fii" />
            {!cartItems[id] 
                ? <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt='aiw' /> : 
                <div className="food_item_counter">
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="rir" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="aig" /> 
                </div>
            } 
        </div>
        <div className="food_item_info">
            <div className="food_item_name_rating">
                <p>{name}</p>
                <img src={assets.rating_starts } alt="" />
            </div>
            <p className="food_item_desc">{description}</p>
            <p className="food_item_price">${price}</p>
        </div>
    </div>
  )
}
