import React from 'react';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {apiKey, urlMarvel} from "../keys/keys";
import getCharacter from "../Home/Functions/getCharacter";
import './Character.css'


const Character = () => {
    const {id} = useParams()
    const [heroes, setHeroes] = useState([])
    const character = id.slice(1)
    useEffect(() => {
        getCharacter(urlMarvel, character, apiKey).then(response => setHeroes(response.results))
    }, [character])

    return (
        <div className={'container'}>
            {heroes && heroes.map((character) => {
                return (
                    <div key={Math.floor(Math.random() * 10000)}>
                        <div align={'center'}>
                            <h2>{character.name}</h2>
                        </div>
                        <div className={'description'}>
                            <img className={'character-img'}
                                 src={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`}
                                 alt={character.name}/>
                            <div className={'character-text'}>
                                {character.description ? <p><b> Description:</b> {character.description}</p> : null}
                                <a href={character.urls[0].url}>{character.urls[0].type}</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Character;
