import React from 'react';
import './ButtonPage.css'
import {NavLink} from "react-router-dom";

const ButtonPage = ({nrPage, clickButton}) => {

    const handleButton = (e) => {
        clickButton(e.target.innerHTML - 1)
    }
    return (
        <>
            <nav>
                <NavLink to={`/page${nrPage+1}`} key={Math.floor(Math.random() * 1000)}
                         onClick={handleButton}
                         className={'btn-page'}
                >{nrPage + 1}</NavLink>
            </nav>

        </>
    );
};

export default ButtonPage;
