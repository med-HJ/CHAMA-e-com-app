import React from 'react'
import { useEffect, useRef } from "react";
import './Home.css';
import Product from './Product';


import image12 from './images/12.jpg';

import bt1 from './images/bt1.jpg';
import bt2 from './images/bt2.jpg';
import price from './images/price.png';

import right from './images/right.png';
import left from './images/left.png'

import image20 from './images/20.gif'
import image10 from './images/10.jpg'
import image18 from './images/18.jpg'
import image19 from './images/9.gif'

import relation from './images/relation.png'
import quality from './images/quality.png'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

import ComputerIcon from '@mui/icons-material/Computer';

import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

import SpaIcon from '@mui/icons-material/Spa';

import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

import HomeIcon from '@mui/icons-material/Home';

import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

import CheckroomIcon from '@mui/icons-material/Checkroom';

import PrintIcon from '@mui/icons-material/Print';

import ScrollList from './ScrollList';

import {data1, data2} from './mockData'


import Oppo from './images/Oppo.mp4';








const Home = () => {
  let image = image12
 
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, [])


  return (

    <div className='home'>
        <img src={image} id='image' alt='hii' className="imageHome"/>


        

      
        <div className='first'>
          <button style={{backgroundColor:'black'}}> <div className='fitem'>
          <PrintIcon/>

            <span className='item'>Electronics</span>

            </div></button>
         
            <button style={{backgroundColor:'black'}}>
              <div className='fitem'>
          <ComputerIcon/>
            <span className='item' >Computer</span>
            
            </div>
            </button>


            <button style={{backgroundColor:'black'}}>
            <div className='fitem'>
            <SportsEsportsIcon/>
            <span className='item'>Games & Consoles </span>
            
            </div>
            </button>

            

            <button style={{backgroundColor:'black'}}>
            <div className='fitem'>
            <PhoneAndroidIcon/>
            <span className='item'>Phone & Tablette </span>
            
            </div>
            </button>


            <button style={{backgroundColor:'black'}}>
            <div className='fitem'>
            <SpaIcon />
            <span className='item'>Health & Beauty</span>
            
            </div>
            </button>


            <button style={{backgroundColor:'black'}}>
            <div className='fitem'>
            <CheckroomIcon />
            <span className='item'>Fashion</span>
            
            </div>
            </button>
          
            <button style={{backgroundColor:'black'}}>
            <div className='fitem'>
            <SportsBasketballIcon/>
            <span className='item'>Sports</span>
            
            </div>
            </button>

            <button style={{backgroundColor:'black'}}>
            <div className='fitem'>
          <HomeIcon/>
            <span className='item'>Home Comfort</span>
            
            </div>
            </button>

            <button style={{backgroundColor:'black'}}>
            <div className='fitem'>
          <RestaurantMenuIcon/>
            <span className='item'> Kitchen Items</span>
            
            </div>  
            </button>
          
          
    
            
         </div>
            
         <div style={{justifyContent: 'center'}}>
               <span style={{fontSize: '40px', textDecoration: 'underline', color: '#0066b2', marginLeft:'30rem'}}>discover our best offers :</span>
               <div className='pt' >  
               <img src={left} className='img' />
               <img src={right}   className='img' />
        
              </div>

        </div>



      <ScrollList title=" Top Sellers in Gaming for you" info = {data1} />

     <div className='lisproducts'>
          <Product price={1500} rating={3} title="Homme Sweat-shirt à capuche à motif dessin animé et slogan à cordon" reviews={0} image='https://img.ltwebstatic.com/images3_pi/2022/07/28/1658972282e5c1f83f0c208fb0cc855a8eb6ca2ff4_thumbnail_900x.webp'/>
          <Product price={1500} rating={3} title="Homme Sweat-shirt à capuche à motif dessin animé et slogan à cordon" reviews={0} image='https://img.ltwebstatic.com/images3_pi/2022/07/28/1658972282e5c1f83f0c208fb0cc855a8eb6ca2ff4_thumbnail_900x.webp'/>
          <Product price={1500} rating={3} title="Homme Sweat-shirt à capuche à motif dessin animé et slogan à cordon" reviews={0} image='https://img.ltwebstatic.com/images3_pi/2022/07/28/1658972282e5c1f83f0c208fb0cc855a8eb6ca2ff4_thumbnail_900x.webp'/>
          <Product price={1500} rating={3} title="Homme Sweat-shirt à capuche à motif dessin animé et slogan à cordon" reviews={0} image='https://img.ltwebstatic.com/images3_pi/2022/07/28/1658972282e5c1f83f0c208fb0cc855a8eb6ca2ff4_thumbnail_900x.webp'/>
     </div>

     <div className='lisproducts'>
          <Product price={1500} rating={3} title="Homme Sweat-shirt à capuche à motif dessin animé et slogan à cordon" reviews={0} image='https://img.ltwebstatic.com/images3_pi/2022/07/28/1658972282e5c1f83f0c208fb0cc855a8eb6ca2ff4_thumbnail_900x.webp'/>
          <Product price={1500} rating={3} title="Homme Sweat-shirt à capuche à motif dessin animé et slogan à cordon" reviews={0} image='https://img.ltwebstatic.com/images3_pi/2022/07/28/1658972282e5c1f83f0c208fb0cc855a8eb6ca2ff4_thumbnail_900x.webp'/>
          <Product price={1500} rating={3} title="Homme Sweat-shirt à capuche à motif dessin animé et slogan à cordon" reviews={0} image='https://img.ltwebstatic.com/images3_pi/2022/07/28/1658972282e5c1f83f0c208fb0cc855a8eb6ca2ff4_thumbnail_900x.webp'/>
          <Product price={1500} rating={3} title="Homme Sweat-shirt à capuche à motif dessin animé et slogan à cordon" reviews={0} image='https://img.ltwebstatic.com/images3_pi/2022/07/28/1658972282e5c1f83f0c208fb0cc855a8eb6ca2ff4_thumbnail_900x.webp'/>
     </div>
     <div className='lisproducts'>
          <Product price={1500} rating={3} title="Homme Sweat-shirt à capuche à motif dessin animé et slogan à cordon" reviews={0} image='https://img.ltwebstatic.com/images3_pi/2022/07/28/1658972282e5c1f83f0c208fb0cc855a8eb6ca2ff4_thumbnail_900x.webp'/>
          <Product price={1500} rating={3} title="Homme Sweat-shirt à capuche à motif dessin animé et slogan à cordon" reviews={0} image='https://img.ltwebstatic.com/images3_pi/2022/07/28/1658972282e5c1f83f0c208fb0cc855a8eb6ca2ff4_thumbnail_900x.webp'/>
          <Product price={1500} rating={3} title="Homme Sweat-shirt à capuche à motif dessin animé et slogan à cordon" reviews={0} image='https://img.ltwebstatic.com/images3_pi/2022/07/28/1658972282e5c1f83f0c208fb0cc855a8eb6ca2ff4_thumbnail_900x.webp'/>
          <Product price={1500} rating={3} title="Homme Sweat-shirt à capuche à motif dessin animé et slogan à cordon" reviews={0} image='https://img.ltwebstatic.com/images3_pi/2022/07/28/1658972282e5c1f83f0c208fb0cc855a8eb6ca2ff4_thumbnail_900x.webp'/>
     </div>
     <br/>
     <br/>
     <br/>
     <br/>

     <div> 
     
      <div>
       
                <video
          style={{ width: "100%", margin: "0 auto" }}
          playsInline
          loop
          muted
          
          alt="All the devices"
          src={Oppo}
          ref={videoEl}
        />
      </div>  
     </div>

     <ScrollList title=" Live Without Limits With Oppo" info = {data2} />

     
  
         
        <hr/>
        <br/>

        <div style={{display:'flex', marginLeft:'40px' , marginRight:'40px'}}>
          <div>
            
            <h1 style={{color: '#0066b2'}}>best prices</h1>
          <p  style={{justifyContent:'center'}}> Save with Cash Back, Coupons and Comparison Shopping you can Maximize Your Savings. 
Gas prices are rising. Inflation is squeezing us all. And yet there are still things
 you need to buy. The prices of items on shelves can be shocking these days, but there
 are ways to ensure that you're getting the best deals.A quick search can make sure 
you've found the best bargain on that item you really want or need, and maybe even 
an additional coupon code. The apps are also useful if you're just bargain hunting,
 as many of them show you the latest deals and flyers from stores. Now that you're ready
 to shop, we've tracked down the best price-comparison apps and rounded them up here to 
help you. Each has its benefits, which we'll get into, but one universal thing you'll probably 
appreciate is that they're all free.
          </p>
          </div>
          <img src={price}/>
          


        </div>
            

        <div style={{display:'flex', marginLeft:'40px' , marginRight:'40px'}}>

        <img src={relation} width='900px' style={{marginRight:80}} />
          <div>
            
            <h1 style={{color: '#0066b2'}} >the best customer-service relationship</h1>
          <p  style={{justifyContent:'center'}}> Customer relationship is about managing interactions with previous, current, and potential customers.
 Companies that manage their customer relations well develop a customer experience strategy that strengthens
 customer retention and promotes customer acquisition. Managing customer relationships is an essential
 part of modern business. There are also many software solutions that make this process easier to control.
You can’t build good customer relations if you don’t know who your customers are and what they value most.
 There are far too many companies that rely on intuition rather than data and feedback. Almost half of them 
don’t collect customer feedback at all.Asking for feedback shows that you care. When you capture voice of
 the customer, you will know what your clients like, what they’re missing, or what you could do better. 
You show them that you value their feedback Feedback attracts (or discourages) potential customers. 
As many as 98% of buyers read online reviews before buying. If your business receives a lot of positive reviews,
 you can use it in your marketing.
          </p>
          </div>
          
          


        </div>
        <br/>
        <br/>

        <div style={{display:'flex', marginLeft:'40px' , marginRight:'40px'}}>
          <div>
            
            <h1 style={{color: '#0066b2'}}>high-quality Products</h1>
          <p  style={{justifyContent:'center'}}> High-quality components and materials that pass safety tests result not only in a safe product
 with an extended lifetime, they also lead to consumers becoming brand ambassadors. But valuable,
 consumer-brand interactions capable of successfully converting a consumer into a brand ambassador
 can only be achieved with impactful, high-end branding solutions. In the end, that’s what marketing 
comes down to. High-quality components and materials that pass safety tests result not only in a safe
 product with an extended lifetime, they also lead to consumers becoming brand ambassadors. But valuable,
 consumer-brand interactions capable of successfully converting a consumer into a brand ambassador can only 
be achieved with impactful, high-end branding solutions. In the end, that’s what marketing comes down to. 
High-quality components and materials that pass safety tests result not only in a safe product with an extended
 lifetime, they also lead to consumers becoming brand ambassadors. But valuable, consumer-brand interactions capable 
of successfully converting a consumer into a brand ambassador can only be achieved with impactful, high-end 
 solutions. In the end, that’s what marketing comes down to.
          </p>
          </div>
          <img src={quality}/>
          


        </div>
        <br/>
        <br/>
       
      <div >
        
          <img src={bt1} style={{width: '100%'}} />
          <span style={{fontSize: '40px', color: '#0066b2', marginLeft:'40rem'}}>Enjoy</span>
          <img src={bt2}  style={{width: '100%'}}/>
          <br/>
          <br/>
       
      </div>


         
         
        
        
        
        
        
      
 



        
        
      
<br/>

       
    </div>
  )
}






export default Home