import React from 'react'
import './Abonnez.css'

const Abonnez = () => {
  return (
    <div className='abonnez'>

        
     <h1 >subscribe to the<br/>  &nbsp; &nbsp;&nbsp;&nbsp;newsletter </h1>


     <p style={{fontSize:'20px', margin:'80px'}}>Receive directly in your mailbox and in preview all our tips,
      <br/> promotions, leaflets, expert advice, contests and much more!</p>

     <div className='subscribe'>
        <input className="abonnezInput " type="text" placeholder="e-mail Adresse"/>
     <button style={{height: '40px', backgroundColor:'black', color:'white'}}>Subscribe</button>
     </div>
     
    </div>
  )
}

export default Abonnez
