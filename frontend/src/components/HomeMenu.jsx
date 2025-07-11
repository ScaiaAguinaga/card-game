export default function HomeMenu({ onStart }) {
    return (
      <div className="flex justify-center items-center flex-col space-y-2 h-screen">
        <h1 className="text-2xl p-2">Welcome to BlackJack :D</h1>
        <button
          className="block py-2 min-w-40 px-4 bg-gray-500 hover:bg-gray-700 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
          onClick={onStart}
        >
          Start
        </button>
        {/* <button className="block py-2 min-w-40 px-4 bg-gray-500 hover:bg-gray-700 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md">
          Settings
        </button> */}
      </div>
    );
}