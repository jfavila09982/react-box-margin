
import './App.css';
import React from 'react';
import CenteredBox from './components/CenteredBox';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/components/Home';
import About from '../src/components/About';





function App() {

    return (
    <div className="App">

        <Router>
        <Routes>
          <Route path="/" element={<CenteredBox />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
  

    
     
   
    </div>
  );
}

export default App;
