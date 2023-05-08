import './App.css';
import React from 'react'; 
import {Route,Routes} from 'react-router';
import MainLayout from './components/layout/MainLayout';
import Aboutus from './components/Pages/Aboutus';
import Contactus from './components/Pages/Contactus';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element ={<MainLayout/>}>
          <Route index element={<Aboutus/>}/>
          <Route path = 'contact-us' element = {<Contactus/>}/>
        
        </Route>
      </Routes>
    
    </div>

  );
}

export default App;
