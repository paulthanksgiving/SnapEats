import React from 'react'
import './Header.css'

export default function Header(){
  return (
    <div className='header'>
        <div className="header_content">
            <h2>
              Crave It. <br/>
              Snap It.
              Eat It.
            </h2>
            <p>
              With SnapEats, your cravings don’t have to wait. From local favorites to chef-inspired meals, we deliver fresh, flavorful food straight to your door fast and hassle-free. Just browse, tap, and enjoy every bite in a snap.
            </p>
            <button>View Menu</button>
        </div>
    </div>
  );
}