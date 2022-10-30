import React from 'react';
import './Header.css';
import logo from './images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ListIcon from '@mui/icons-material/List';

import { useStateValue } from "./StateProvider";


const Header = () => {

  const [{ basket, user }, dispatch] = useStateValue();


  return (
    <div className="header">
      <img  src={logo} className="logo" />
      <div className='categories option'>
        <ListIcon className='ListIcon'/>
        <span className='test'>Categories</span>



      </div>
      <div className='search'>
        <input className="searchInput " type="text" placeholder="Search"/>
        <SearchIcon className="searchicon" />

      </div>

      <div className='nav'>

        <div className = 'choice'>
          <PersonIcon style={{fontSize: `2.5em`}}/> 
          <span className='second'> Guest</span>
        
      </div>


        <div className = 'choice'>
          <AssignmentTurnedInIcon style={{fontSize: `2.5em`}} /> 
          <span className='second'> Orders</span>
        

        </div>

        <div className = 'choice'>
          <FavoriteIcon style={{fontSize: `2.5em`}} /> 
          <span className='second'> Saved</span>
        

        </div>

        <div className = 'cart'>
          <div className='choice vchoice'>
            <ShoppingCartIcon style={{fontSize: `2.5em`}} /> 
          <span className='second'> Cart</span>
          </div>
          
          <span className='cartCount second'>{basket?.length}</span>
        

        </div>
            

   </div>

      </div>
  
  )
}

export default Header
