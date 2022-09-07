import React, {useState} from 'react';
import {apiKey, urlMarvel} from "../keys/keys";
import getHeroes from "./getHeroes/getHearoes";
import InputSearch from "./inputSearch/InputSearch";
import Page from "../Page/Page";
import './Search.css'

const Search = () => {
    let [searchHero, setSearchHero] = useState('iron')
    let [heroes, setHeroes] = useState([])

    const inputValue = (e) => {
        setSearchHero(searchHero = e.target.value)
    }

    const clickButon = () => {
        getHeroes(urlMarvel, searchHero, apiKey).then(response => setHeroes(heroes = response.results))
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            clickButon()
        }
    }

    return (
        <div className={'search-page'}>
            <h1>Search heroes</h1>
            <InputSearch
                pressEnter={handleKeyPress}
                inputValue={inputValue}
                clickSearch={clickButon}/>
            <Page heroesPages={heroes}/>
        </div>
    );
};

export default Search;
