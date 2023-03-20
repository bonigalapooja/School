import React from 'react';
import { ReactDOM } from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import About from './About us';
import Primary from './Primary';
import Header from './Header';
import Slider from './component/Slider';





const App = () => {
  return (

    <div>
      <BrowserRouter>
      <Header/>
    <Slider/>

      <Routes>

        <Route path ="/About us" element={<About/>}></Route>
        <Route path ="/Primary" element={<Primary/>}></Route>
      </Routes>
      
      </BrowserRouter>




  
    

        
        
        
    </div>
  );
}

export default App ;



