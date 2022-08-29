import React, { useState } from "react";

function Sushi({ oneSushi, addPlate}) {
  //const [id, name, img_url, price] = oneSushi;

  const [showSushi, setShowSushi] = useState(false)

  function eatHandler() {
    //if showSushi = true && addPlate = false => is true which will run the code
    if (!showSushi && addPlate(oneSushi)) {
      addPlate(oneSushi)
      setShowSushi(true)
    }


    /* if useState was true and the null was put at bottom, 
    it would look like this => 

    if (showSushi) {
        setEaten([...eaten, oneSushi])
      setShowSushi(false)
    }
    */


    


  }
  return (
    <div className="sushi">
      <div className="plate" onClick={eatHandler}>
        {/* Tell me if this sushi has been eaten! */}
        {showSushi ? null : (
          <img
            src={oneSushi.img_url}
            alt={oneSushi.name}
            width="100%"
          // ) : null }
          // if you want useState to be "true" move "null" to the bottom
          />
        )}
      </div>
      <h4 className="sushi-details">
        {oneSushi.name} - ${oneSushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
