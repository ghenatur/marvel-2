import React from 'react';
import ButtonPage from "./ButtonPage";

const SeriesButton = ({placePage,clickButton}) => {

    return (
        <div className={'btn-container'}>
            {placePage && placePage.map((page, index) =>

                    <ButtonPage key={Math.floor(Math.random() * 1000)} nrPage={index} clickButton={clickButton} />

            )}
        </div>
    );
};

export default SeriesButton;
