import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, addBot, deleteBot }) {
  // Your code here
  console.log(bots);
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleAddBot={addBot} deleteBot={deleteBot} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
