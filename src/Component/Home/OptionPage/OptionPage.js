import React from 'react';
import SeriesButton from "./SeriesButtonPage/SeriesButton";
import OptionSizePage from "./OptionSizePage/OptionSizePage";
import './OptionPage.css'

const OptionPage = ({onChange, placePage,clickButton}) => {

    return (
        <div className={'option-page'}>
            <SeriesButton placePage={placePage} clickButton={clickButton}/>
            <OptionSizePage  onChange={onChange}/>
        </div>
    );
};

export default OptionPage;
