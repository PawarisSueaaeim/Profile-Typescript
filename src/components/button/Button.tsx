import React , {useState} from 'react';
import Form from 'react-bootstrap/Form';

import  { FiMoon }  from "react-icons/fi";

function DarkLightMode() {

    const [lightMode, setLightmode] = useState(false);

    const onClick = () => {
      setLightmode(!lightMode);
    };

  return (
    <div>
      <FiMoon />
    </div>
  );
}

export default DarkLightMode;