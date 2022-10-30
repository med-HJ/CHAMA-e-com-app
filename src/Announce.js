import React from 'react';
import './Announce.css';
import buy from './images/buy.png';
import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import image4 from './images/4.png';
import image5 from './images/5.png';
import image6 from './images/6.png';
import image7 from './images/7.png';
import image8 from './images/8.png';



const Announce = () => {
  return (
    <div className="announce">
      <img src={image1} style={{marginLeft:20, }} className="icos"/>
      <img src={image2}  style={{marginLeft:50 }} className="icos"/>
      <img src={image4}  style={{marginLeft:50  }} className="icos"/>
      <div style={{position: 'absolute', top: 0, left:1250}}>
      <img src={image3}  style={{marginRight:50  }} className="icos"/>
      
      <img src={image5}  style={{marginLeft:0  }} className="icos"/>
      <img src={image6}  style={{marginLeft:50  }} className="icos"/>
      </div>
      
      <img src={image7}  style={{marginLeft:2 , position: 'absolute', top: 0, left:330, marginTop:2 }} className="icos"/>
      <img src={image8}  style={{marginLeft:2 , position: 'absolute', top: 0, left:930, margin:7}} className="icos"/>
      <p className="main" style={{color: `#FFF0F5`, marginTop:`10px`}}>FREE SHIPPING FOR ORDERS OVER  <span style={{color:`#BA0021`, fontWeight:`bold`, marginLeft:`20px`}}>2000 DH</span></p>
      <img src={buy}  className="buy" />
    </div>
  )
}

export default Announce
