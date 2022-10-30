import React from 'react'
import './Prduits.css'
import fam from './images/fam.jpg'
import bab from './images/kids.jpg'
import Shoppingkids from './images/Shoppingkids.jpg'
import woman from './images/woman.jpg'
import man from './images/man.jpg'
const Prduits = () => {
  return (
    <div className='Prduits'>

    <div className='catPrduits'> 
            <img src={man} id='cat'/>
            <h3>Men</h3>
          
            
    </div>
    <div className='catPrduits'> 
            <img src={woman} id='cat' style={{marginRight:'5px'}}/>
            <h3>Women</h3>
          
            
    </div>
    <div className='catPrduits'> 
            <img src={Shoppingkids} id='cat'/>
            <h3>Kids</h3>
          
            
    </div>
    <div className='catPrduits'> 
            <img src={bab} id='cat'/>
            <h3>Baby</h3>
          
            
    </div>

    <div className='catPrduits'> 
            <img src={fam} id='cat' style={{marginRight:'5px'}}/>
            <h3>Family</h3>
          
            
    </div>
   
   
    </div>
  )
}

export default Prduits
