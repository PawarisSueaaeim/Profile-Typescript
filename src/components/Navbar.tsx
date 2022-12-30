import React from "react";

interface Navbar {
    home: string,
}

const Navbar: React.FC<Navbar> = ({ home }) => {
    return (
        <nav>
            <ul>
                <li><a target='_blank'>{home}</a></li>
                <li><a target='_blank'>Skills</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
