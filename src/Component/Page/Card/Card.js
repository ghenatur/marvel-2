import React from 'react';
import "./Card.css"

const Card = ({description,name,path,extension,index}) => {
    return (
        <div className="card">
            <h3>{index}</h3>
            <img src={`${path}/standard_fantastic.${extension}`} alt={name}/>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;
