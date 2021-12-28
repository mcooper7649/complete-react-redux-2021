import React from 'react';
import './card-list.styles.css';
import { Card } from './card.component';

const CardList = props => {
    
    return <div className="card-list">
    {props.monsters.map(monster => {
        return <Card key={monster.id} id={monster.id} name={monster.name} {...monster} ></Card>
      })}
      </div>;
}

export default CardList;