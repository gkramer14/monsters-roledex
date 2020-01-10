import React from 'react';
import Card from '../card/card.component';

import './card-list.style.css';

const CardList = (props) => {
    return (
        <div className="card-list">
            {props.monsters.map(el => (
                <Card key={el.id} monster={el} />
            ))}
        </div>
    );
};

export default CardList;