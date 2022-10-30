import React from 'react'
import './Product.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, image, price, rating , reviews}) => {

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        reviews: reviews,
      },
    });
  };


  return (
    <div> <div className='prduitit'>  

<img className='img_product' src={image} alt='hi'/>
<div className="product__info">
        <p style={{margin:10}}>{title}</p>
       <div className='favoris_price'>

       <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
           
            <span style={{ marginLeft: '.5rem' }} >{reviews}</span>
            <p style={{ marginLeft: '.5rem' }} >reviews</p>
        </div>

       
        <FavoriteBorderIcon className='aime' />


       </div>
       <br/>
        
       <p style={{ marginLeft: '7rem', fontSize: '25px'}} className="product__price">
          
          <strong >{price} </strong>
          <small style={{ marginLeft: '.5rem' }}>DH</small>
        </p>


        
        
      </div>
      <h2 id='panier' onClick={addToBasket} >Add to Basket</h2>
      
</div>


</div>

  

  );
}

export default Product