import React, {useState} from "react";

function Sushi({sushi, budget, setBudget, setPlates, plates}) {
  const [eaten, setEaten]=useState(false)

  function handleEatClick(){
    if(eaten){
      console.log(sushi.name, 'was already eaten')
    } else {
      if (budget-sushi.price >= 0){
        console.log('eat', sushi.name, '$', sushi.price, 'id', sushi.id)
        setEaten(true)
        setBudget(budget-sushi.price)
        setPlates([...plates, sushi.id])
      }
      else {console.log('you need more money to eat this')}
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatClick}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
