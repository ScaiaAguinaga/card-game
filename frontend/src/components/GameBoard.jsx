export default function GameBoard({ onQuit, onHit, onStand }) {
    return (
      <div className="bg-green-800 h-screen">
        {/** Game UI */}

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