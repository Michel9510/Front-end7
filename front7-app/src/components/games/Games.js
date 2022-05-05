import React from "react";

const Game = ({ game }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-image">
          <img src={game.image} alt={game.title} />
        </div>
        <div className="card-back">
          <h1 className="center">{game.title}</h1>
          <ul>
            <li>
              <strong>Description:</strong> {game.description}
            </li>
            <li>
              <strong>Genre:</strong> {game.genre}
            </li>
            <li>
              <strong>Year:</strong> {game.year}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Game;