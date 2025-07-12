import Logo from "/Logo.png";

export default function HomeMenu({ onStart }) {
  return (
    <div className="flex justify-center items-center flex-col space-y-8 h-screen">
      <img
        className="md:pl-0 md:pr-0 pl-4 pr-4"
        src={Logo}
        width={512}
        height={512}
      />
      <button
        className="block py-2 min-w-40 px-4 bg-gray-500 hover:bg-gray-700 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
        onClick={onStart}
      >
        Start Game!
      </button>
      <footer className="text-white text-md absolute bottom-5 left-1/2 -translate-x-1/2 text-center">
        Developed By Shawn Thompson (Front-End) and Isaac Aguinaga (Back-End)
        &copy; 2025
      </footer>
    </div>
  );
}
