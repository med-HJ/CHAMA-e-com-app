import React from 'react'
import './ScrollList.css'


import { MdChevronLeft, MdChevronRight } from 'react-icons/md';




const ScrollList = (props) => {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
          <div className='real'> 
            <h2 style={{margin:20}}>{props.title}</h2>

             <div className='all'>
        
        <MdChevronLeft className='btn2 ' onClick={slideLeft} size={80} />
        <div id='slider' className=' imrol ' >
          {props.info.map((item) => (
            <img
              className='scrollitem'
              src={item.img}
              alt='/' />
          ))}
        </div>
        <MdChevronRight className='btn2' onClick={slideRight} size={80} />
      </div>
          </div>
     
    
  );
}

export default ScrollList
