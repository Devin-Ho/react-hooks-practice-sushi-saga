import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({fourSushis, setStartingIndex, startingIndex, addPlate}) {

  function renderSushi () {
    return fourSushis.map((oneSushi) => {
      return <Sushi oneSushi = {oneSushi} key = {oneSushi.id} addPlate = {addPlate}/>
    })
  }
  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {renderSushi()}
      <MoreButton setStartingIndex = {setStartingIndex} 
      startingIndex = {startingIndex}
      />
    </div>
  );
}

export default SushiContainer;
