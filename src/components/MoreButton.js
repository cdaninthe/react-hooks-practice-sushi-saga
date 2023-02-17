import React from "react";

function MoreButton({display, setDisplay, sushis}) {
  function handleMoreClick(){
    console.log('next page of sushis', display+4)
    console.log(sushis.length)
    setDisplay(display+4)
    //sushis.length <= (display+4) ? setDisplay(display+4) : setDisplay(0)
  }

  return <button onClick={handleMoreClick}>More sushi!</button>;
}

export default MoreButton;
