import React, {useEffect} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";
import { useState } from "react";

function SushiContainer({API, budget, setBudget, plates, setPlates}) {
  const [sushis, setSushis] = useState([])
  const [display, setDisplay] = useState(0)

  useEffect(()=>{
    fetch(API)
    .then((r)=> r.json())
    .then((sushis)=> setSushis(sushis))
  }, [])


  return (
    <div className="belt">
      {sushis.slice(display, display+4).map((sushi) => (
        <Sushi
          key={sushi.id} sushi={sushi}
          budget={budget} setBudget={setBudget}
          plates={plates} setPlates={setPlates}
        />
      ))}

      <MoreButton 
        display={display} setDisplay={setDisplay} 
        sushis={sushis}
      />
    </div>
  );
}

export default SushiContainer;
