import React from 'react';
import './ButtonPage.css'
import {NavLink} from "react-router-dom";

const ButtonPage = ({nrPage}) => {
    return (
        <>
            <nav>
                <NavLink to={`/page${nrPage + 1}`} key={Math.floor(Math.random() * 1000)}
                         className={'btn-page'}>{nrPage + 1}</NavLink>
            </nav>
        </>
    );
};

export default ButtonPage;
