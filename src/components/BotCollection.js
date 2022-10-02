import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, addBot, deleteBot }) {
  // Your code here
  function deleteFromCollection() {
    fetch(`http://localhost:8002/bots/${bots.id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => deleteBot(bots))
  }

  console.log(bots);
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleAddBot={addBot} handleBotDelete={deleteFromCollection} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
