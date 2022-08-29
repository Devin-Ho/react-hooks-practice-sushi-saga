import React from "react";

function MoreButton({setStartingIndex, startingIndex}) {
  function handleClick () {
    setStartingIndex(startingIndex + 4)
  }
  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
