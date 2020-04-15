import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [cardSet, setCardSet] = useState([]);

  const listItemClasses = [];

  const scenarios = [
    "Take any key from the board",
    "Steal a key from an opponent",
    "Trade a key with a willing opponent",
    "Take a red key from the board",
    "Take a green key from the board",
    "Take a yellow key from the board",
    "Take a blue key from the board",
    "Take an orange key from the board",
    "Take a purple key from the board",
    "Take a key from the realm you are in",
    "Scream STOP. Anyone that jumps must reveal their keys",
    "Scream STOP. Anyone that jumps must lose a key",
    "Scream STOP. Anyone that jumps must miss a turn",
    "Give this card to the person with the most keys, they are banished",
    "Give this card to the person with the most keys, they must lose a key",
    "Give this card to the person with the most keys, they must miss a turn",
    "Hand to an opponent. They cannot play the game for the next 5 minutes",
    "If somebody wins a key, banish them",
    "Release yourself from the black hole",
    "Give this to the player who's turn it is and banish them",
    "Give this card to the chosen one and banish them",
    "Take all time cards from the person with the most keys",
    "Take all fate cards from the person with the most keys",
  ];

  const getCard = () => {
    const text = scenarios[Math.floor(Math.random() * scenarios.length)];
    const milliseconds = Math.floor(Math.random() * 2700 * 1000);
    const date = new Date(milliseconds);
    const time = `${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
    setCardSet([
      ...cardSet,
      {
        text,
        time,
      },
    ]);
  };

  const discardCard = (index) => {
    setCardSet([...cardSet.slice(0, index), ...cardSet.slice(index + 1)]);
  };

  return (
    <div className="mainContainer">
      {playerName.length === 0 ? (
        <>
          <input
            placeholder="Enter your name"
            value={inputValue}
            onChange={({ target }) => setInputValue(target.value)}
          />
          <button onClick={() => setPlayerName(inputValue)}>Ok</button>
        </>
      ) : (
        <>
          <p>{`Pick a card, ${playerName}`}</p>
          <button onClick={() => getCard()}>Draw a time card</button>
          <p>{`${playerName}'s current cards:`}</p>
          <ul>
            {cardSet.map((card, idx) => (
              <li className="listItem" key={idx}>
                <p
                  className={listItemClasses.join(" ")}
                >{`${card.text} - ${card.time}`}</p>
                <button
                  className="discardButton"
                  onClick={() => {
                    discardCard(idx);
                  }}
                >
                  Discard
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default App;
