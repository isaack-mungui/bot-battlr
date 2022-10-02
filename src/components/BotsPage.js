import React from "react";
import { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [botCollection, setBotCollection] = useState([])
  const [botArmy, setBotArmy] = useState([])

  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then((r) => r.json())
    .then((bots) => {
      console.log(bots);
      setBotCollection(bots)
    })
  }, [])

  function addBotToArmy(armyBot) {
    console.log(armyBot);
    if (!botArmy.find((bot) => bot === armyBot)) {
      let selectBot = botCollection.find((bot) => bot === armyBot);
      setBotArmy([...botArmy, selectBot]);
    }
  }

  function deleteFromCollection(deletedBot) {
    fetch(`http://localhost:8002/bots/${deletedBot.id}`, {
      method: "DELETE",
    })
    // .then((r) => r.json())
    // .then(() => deleteBot(bots))
    console.log(deletedBot);
    const updatedCollection = botCollection.filter((bot) => bot.id !== deletedBot.id)
    setBotCollection(updatedCollection)
  }

  return (
    <div>
      <YourBotArmy botArmy={botArmy} />
      <BotCollection bots={botCollection} deleteBot={deleteFromCollection} addBot={addBotToArmy} />
    </div>
  )
}

export default BotsPage;
