
import "./App.css";
import Page1 from "./Page1/Page1";
import { MainValue } from "./ContextValue";
import { useContext, useState } from "react";

function App() {
  const a = useContext(MainValue);
  const [word, setWord] = useState(a);
  return (
    <div className="App">
      <MainValue.Provider value={word}>
        <Page1
          funcChangeVal={() =>
            setWord((prev) => (prev === "glavna" ? "druga" : "glavna"))
          }
        />
      </MainValue.Provider>
    </div>
  );
}

export default App;
