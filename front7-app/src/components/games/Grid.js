import React from "react";
import Game from "./Game";

const Grid = ({ games, isLoading }) => {
  return isLoading ? (
    <h1>Loading Game...</h1>
  ) : (
    <section className="cards">
      {games.map(game => (
        <Game key={game.title} game={game}></Game>
      ))}
    </section>
  );
};

export default Grid