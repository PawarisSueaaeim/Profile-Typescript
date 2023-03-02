import React, {useState} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import '../src/style/common/Switch.css';

import Home from './page/Home';

import  { FiMoon , FiSun }  from "react-icons/fi";

function App() {

  const [lightMode, setLightmode] = useState(false);

    const onClick = () => {
      setLightmode(!lightMode);
    };

  return (
    <div>
      <div className="navbar">
        <Navbar home={'Home'} title={{
          link1: 'About',
          link2: 'Experience',
          link3: 'Contact Us',
        }}/>
      </div>
      <div onClick={onClick} className="switch">
        {lightMode ? <FiMoon /> : <FiSun /> }
      </div>
      <Home bgmode={lightMode}/>
    </div>
  );
}

export default App;
