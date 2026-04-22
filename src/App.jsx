import Landing from "./pages/Landing";

function App() {
  return (
    <>
      <Landing />
      <div className="columns-3">
        <div className="hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out bg-blue-600 text-white px-6 py-3 rounded-xl text-lg">1</div>
        <div className="hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out bg-green-500 text-white px-6 py-3 rounded-xl text-lg">2</div>
        <div className="hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out bg-blue-500 text-white px-6 py-3 rounded-xl text-lg">3</div>
        <div className="hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out bg-yellow-500 text-white px-6 py-3 rounded-xl text-lg">4</div>
        <div className="hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out bg-purple-500 text-white px-6 py-3 rounded-xl text-lg">5</div>
        <div className="hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out bg-pink-500 text-white px-6 py-3 rounded-xl text-lg">6</div>
      </div>
    </>
  )
}

export default App;