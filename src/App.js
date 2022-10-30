import React from 'react';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';


function App() {
  return (

    <Router>
      <div>

       <Routes>

      <Route path="/" element={<Page1/>} />
      <Route path="/card" element={<Page2/>}/>
      <Route path="/shop" element={<Page3/>}/>
      <Route path="/product" element={<Page4/>}/>
       </Routes>

     </div>
    
    </Router>

     

    
  );
}

export default App;
