import { useState } from "react";

import HomeMenu from "./components/HomeMenu";
import GameBoard from "./components/GameBoard";

export default function App() {
  const [screen, setScreen] = useState("home");

  const handleHit = () => {
    console.log("Hit button clicked");
  };

  const handleStand = () => {
    console.log("Stand button clicked");
  };

  const handleStartGame = () => {
    setScreen("game");
  };

  return (
    <>
      {screen === "home" && <HomeMenu onStart={handleStartGame} />}
      {screen === "game" && (
        <GameBoard
          onQuit={() => {
            setScreen("home");
          }}
          onHit={handleHit}
          onStand={handleStand}
        />
      )}
    </>
  );
}
