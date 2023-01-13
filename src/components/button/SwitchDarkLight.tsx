import React , {useState} from 'react';
import '../../style/common/Switch.css';

import  { FiMoon , FiSun }  from "react-icons/fi";


function DarkLightMode() {

    const [lightMode, setLightmode] = useState(false);

    const onClick = () => {
      setLightmode(!lightMode);
    };

  return (
    <div onClick={onClick} className="switch">
      {lightMode ? <FiMoon /> : <FiSun /> }
    </div>
  );
}

export default DarkLightMode;