import React from 'react'
import './Footer.css';
import { assets } from '../../assets/assets';

export default function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer_content">
            <div className="footer_content_left">
                <img className='logo' src={assets.logo} alt="" />
                <p>SnapEats is your trusted partner in flavor and convenience bringing fresh, delicious meals to your doorstep with just a few taps. Made with care, delivered with speed because you deserve great food, in a snap.</p>
                <div className="footer_social_icons">
                    <img src={assets.facebook_icon} alt="afi" />
                    <img src={assets.twitter_icon} alt="ati" />
                    <img src={assets.linkedin_icon} alt="ali" />
                </div>
            </div>
            <div className="footer_content_center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer_content_right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-555-213-6457</li>
                    <li>contact@snapeats.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer_copyright'>Copyright 2025 © SnapEats.com - All rights reserved.</p>
    </div>
  );
}
