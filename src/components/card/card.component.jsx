import React from 'react';

import './card.style.css';

const Card = props => (
    <div className="card-container">
        <img alt="face-monster" src={`https://robohash.org/${props.monster.id}?set=set2`}></img>
        <h1>{props.monster.name}</h1>
        <p>{props.monster.email}</p>
    </div>
);

export default Card;