import React from 'react';
import ButtonPage from "./ButtonPage";

const SeriesButton = ({placePage}) => {
    return (
        <div className={'btn-container'}>
            {placePage && placePage.map((page, index) =>
                <>
                    <ButtonPage key={Math.floor(Math.random() * 1000)} nrPage={index}/>
                </>
            )}
        </div>
    );
};

export default SeriesButton;
