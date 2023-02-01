import React from "react";

interface SwitchDarkLightMode {
    onClick: ;
}

const SwitchDarkLightMode: React.FC<SwitchDarkLightMode> = () => {
    const [lightMode, setLightmode] = React.useState(true);

    const onClick = () => {
      setLightmode(!lightMode);
    };

    return (

    );
};

export default SwitchDarkLightMode;

