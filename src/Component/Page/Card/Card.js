import React from 'react';
import "./Card.css"
import {useNavigate} from "react-router-dom"

const Card = ({id, name, path, extension, index}) => {
    const navigate = useNavigate()
    return (
        <div className="card" onClick={() => navigate(`/character${id}`)}>
            <h3>{index + 1}</h3>
            <img src={`${path}/standard_fantastic.${extension}`} alt={name}/>
            <h3>{name}</h3>
        </div>
    );
};

export default Card;
