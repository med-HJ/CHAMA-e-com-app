import React from 'react';
import Announce from './Announce';
import Header from './Header';
import Home from './Home';
import Abonnez from './Abonnez';



import { FooterContainer } from './containers/footer'

function Page1() {
  return (

 <div>
    <Announce/>
    <Header/>
    <Home/>
    <Abonnez/>
    <FooterContainer/>
   
</div>
    
  );
}

export default Page1;
