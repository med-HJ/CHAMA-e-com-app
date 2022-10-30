import React from 'react'
import Announce from './Announce'
import Header from './Header'
import ProductDetails from './ProductDetails'
import Product from './Product'
import { FooterContainer } from './containers/footer'


const Page4 = () => {
  return (
    <div>
        <Announce/>
        <Header/>
        <ProductDetails/>
        <br/>
        <br/>
        <br/>
        <div className='homedt'>
        <div className='axa'> 
        <h2  >Similar Products</h2>
        <hr/>
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
      
     </div>
      <FooterContainer/>  

    </div>
  )
}

export default Page4