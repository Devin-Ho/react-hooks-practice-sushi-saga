import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";



function App() {
  const [sushis, setSushis] = useState([])
  const [startingIndex, setStartingIndex] = useState(0)
  const [eaten, setEaten] = useState([])
  const [wallet, setWallet] = useState(100)



  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(sushi => setSushis(sushi))
  }, [])

  function selectFourSushis() {
    return sushis.slice(startingIndex, startingIndex + 4)
  }

  function addPlate(oneSushi) {
    

    //subtract money from wallet
    const newWallet = wallet - oneSushi.price;

    if (newWallet > 0) {
          setEaten([...eaten, oneSushi])
          setWallet(wallet - oneSushi.price)
          return true
    }
    return false
  

  }

  return (
    <div className="app">
      <SushiContainer fourSushis={selectFourSushis()}
        setStartingIndex={setStartingIndex}
        startingIndex={startingIndex}
        addPlate={addPlate}
      />
      <Table plates={eaten} wallet={wallet} />
    </div>
  );
}

export default App;
