import React, {useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [budget, setBudget] = useState(50)
  const [plates, setPlates] = useState([])

  return (
    <div className="app">
      <SushiContainer 
        API={API}
        budget={budget} setBudget={setBudget}
        plates={plates} setPlates={setPlates}
      />
      <Table 
        budget={budget} setBudget={setBudget}
        plates={plates}
      />
    </div>
  );
}

export default App;
