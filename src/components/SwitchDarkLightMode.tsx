import React from "react";

interface SwitchDarkLightMode {
    onClick: (event: Event) => void;
}

const SwitchDarkLightMode = () => {
    const [lightMode, setLightmode] = React.useState(true);

    const onClick = () => {
      setLightmode(!lightMode);
    };

    return (

    );
};

export default SwitchDarkLightMode;

