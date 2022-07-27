import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk-700x467.jpg",
        },
        {
            name: "Jeff Bezos",
            url: "https://imageio.forbes.com/specials-images/imageserve/5bb22ae84bbe6f67d2e82e05/0x0.jpg?format=jpg&crop=1012,1013,x627,y129,safe&height=416&width=416&fit=bounds",
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    }

    return (
        <div className="tinderCards__cardContainer">
            {
                people.map((person) => {
                    return (
                        <TinderCard
                            className="swipe"
                            key={person.name}
                            preventSwipe={["up", "down"]}
                            onSwipe={(dir) => swiped(dir, person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}
                        >
                            <div
                                style={{backgroundImage: `url(${person.url})`}}
                                className="card"
                            >
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    )
                })
            }
        </div>
    )
}

export default TinderCards;