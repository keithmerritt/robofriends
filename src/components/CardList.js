import React from 'react';
import Card from './Card';

//Because we have created the 'Card' component, we can now place this inside a single div for react to generate//
//Here we assign each card an id that we pull from robots.js, as well as the values for each property, also pulled from robots.js//

const CardList = ({ robots }) => {
    //Now we want to make a loop that will loop through every card object in robots.js, which we can do using the 'map' method://
    const cardComponent = robots.map ((user, i) => {
        return <Card key={i} 
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email}/>
    })
    return (
        <div>
        {cardComponent};
        </div>
    );
}

export default CardList;