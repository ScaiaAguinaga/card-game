import DeckContainer from "./DeckContainer";

export default function GameBoard({
  onQuit,
  onHit,
  onStand,
  playerCards,
  dealerCards,
  playerScore,
  dealerScore,
}) {
  return (
    <div className="bg-green-800 h-screen flex flex-col justify-between">
      {/** Deck Containers: (Dealer (TOP) and Player (BOTTOM) */}
      <div className="flex-shrink-0 mt-10">
        <DeckContainer cards={dealerCards} title="Dealer" score={dealerScore} />
      </div>
      <div className="flex-shrink-0 mb-25">
        <DeckContainer cards={playerCards} title="Player" score={playerScore} />
      </div>

      {/*** Game Actions */}
      <div className="flex flex-row fixed space-x-4 bottom-5 left-1/2 -translate-x-1/2">
        <button
          className="min-w-20 bg-gray-500 hover:bg-gray-700 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-1 px-2"
          onClick={onHit}
        >
          Hit
        </button>
        <button
          className="min-w-20 bg-gray-500 hover:bg-gray-700 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-1 px-2"
          onClick={onStand}
        >
          Stand
        </button>
      </div>

      {/*** Quit Button */}
      <div className="flex flex-row fixed bottom-5 pl-4">
        <button
          className="bg-gray-500 hover:bg-gray-700 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-1 px-2"
          onClick={onQuit}
        >
          Quit
        </button>
      </div>
    </div>
  );
}
