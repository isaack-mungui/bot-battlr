import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ botArmy }) {
  //your bot army code here...
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botArmy.map((bot) => (
            <BotCard  bot={bot} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
