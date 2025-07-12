import { useState } from "react";

import HomeMenu from "./components/HomeMenu";
import GameBoard from "./components/GameBoard";

export default function App() {
  const [screen, setScreen] = useState("home");

  /** Test Buttons */
  const handleHit = () => {
    console.log("Hit button clicked");
  };

  const handleStand = () => {
    console.log("Stand button clicked");
  };

  return (
    <>
      {screen === "home" && <HomeMenu onStart={() => setScreen("game")} />}
      {screen === "game" && (
        <GameBoard
          onQuit={() => setScreen("home")}
          onHit={handleHit}
          onStand={handleStand}
        />
      )}
    </>
  );
}
