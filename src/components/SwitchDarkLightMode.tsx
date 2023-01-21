import React from "react";

interface SwitchDarkLightMode {
    
}

const SwitchDarkLightMode = () => {
    const [lightMode, setLightmode] = React.useState(false);

    const onClick = () => {
      setLightmode(!lightMode);
    };
};

export default SwitchDarkLightMode;

