import React from "react";
import { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [botCollection, setBotCollection] = useState([])

  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then((r) => r.json())
    .then((bots) => {
      console.log(bots);
      setBotCollection(bots)
    })
  }, [])

  return (
    <div>
      <YourBotArmy />
      <BotCollection bots={botCollection} />
    </div>
  )
}

export default BotsPage;
