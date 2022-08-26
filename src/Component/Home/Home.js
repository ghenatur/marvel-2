import React from 'react';
import OptionPage from "./OptionPage/OptionPage";
import './Home.css'

const Home = ({placePage,onChange}) => {

    return (
        <div className={'home'}>
            <h1>Marvel heroes</h1>
            <OptionPage  onChange={onChange} placePage={placePage}/>
        </div>
    );
};

export default Home;
