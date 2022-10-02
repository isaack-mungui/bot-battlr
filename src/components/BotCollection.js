import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";

function BotCollection({ bots }) {
  // Your code here
  console.log(bots);
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
