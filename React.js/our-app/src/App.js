import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline ">Hello world!</h1>
      <div className="flex justify-center h-14  bg-plava mt-16 mx-10 rounded-xl px-8">
        <div className="prvi">Prvi</div>
        <div className="drugi">Drugi</div>
        <div className="treci">treci</div>
        <button className="bg-indigo-500">Button</button>
      </div>

      <div className="prvi"></div>
    </div>
  );
}

export default App;
