import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import Grid from "./components/games/Grid";

function App() {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      setIsLoading(true)
      const result = await axios(`https://game-api7.herokuapp.com/api/games`);

      console.log(result.data);
      setGames(result.data);
      setIsLoading(false);
    };

    fetchGames();
  }, []);

  return (
    <div className="container">
      <Header />
      <Grid isLoading={isLoading} games={games} />
    </div>
  );
}

export default App;