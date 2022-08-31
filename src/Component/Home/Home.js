import React, {useEffect, useState} from 'react';
import OptionPage from "./OptionPage/OptionPage";
import './Home.css'
import Page from "../Page/Page";
import basicHeroes from "./Functions/basicHeroes";
import {apiKey2, urlMarvel} from "../keys/keys";
import placementOnPages from "./Functions/placementOnPages";

const Home = ({setNrPage}) => {
    let [heroes, setHeroes] = useState([])
    const [option, setOption] = useState(10)
    const [nrButton, setNrButton] = useState(0)

    useEffect(()=>{
       basicHeroes(urlMarvel, apiKey2, 100).then(response => setHeroes( response.results))
    },[])

    const handleOption = (option) => {
        setOption(option)
    }

    const handleButton = (nrButton) => {
        setNrButton(nrButton)
        setNrPage(nrButton)

    }
    const placePage = placementOnPages(option, heroes)

    return (
        <div className={'home'}>
            <h1>Marvel heroes</h1>
            <OptionPage onChange={handleOption} placePage={placePage} clickButton={handleButton}/>
            <Page index={nrButton} key={Math.floor(Math.random() * 1000)} heroesPages={placePage[nrButton]}/>
        </div>
    );
};

export default Home;
