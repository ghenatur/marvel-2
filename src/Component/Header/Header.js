import React from 'react';
import {NavLink} from "react-router-dom";

const Header = ({clickHome}) => {

    return (
        <div>
            <nav>
                <NavLink to={'/'} onClick={clickHome}>Home</NavLink>
                <NavLink to={'/search'}>Search</NavLink>
            </nav>
        </div>
    );
};

export default Header;
