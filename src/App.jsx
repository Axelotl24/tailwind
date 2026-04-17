import Landing from "./pages/Landing";

function App() {
  return (
    <>
      <Landing />
      <div className="columns-3">
        <div className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg">1</div>
        <div className="bg-green-500 text-white px-6 py-3 rounded-xl text-lg">2</div>
        <div className="bg-blue-500 text-white px-6 py-3 rounded-xl text-lg">3</div>
        <div className="bg-yellow-500 text-white px-6 py-3 rounded-xl text-lg">4</div>
        <div className="bg-purple-500 text-white px-6 py-3 rounded-xl text-lg">5</div>
        <div className="bg-pink-500 text-white px-6 py-3 rounded-xl text-lg">6</div>
      </div>
    </>
  )
}

export default App;