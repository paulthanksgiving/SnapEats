import React from 'react';
import './AppDownload.css'; 
import { assets } from '../../assets/assets';

export default function AppDownload() {
  return (
    <div>
      <div className="app_download" id='app_download'>
        <p>For Better Experience Download <br/> SnapEats App</p>
        <div className="app_download_platform">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
      </div>
    </div>
  )
}
