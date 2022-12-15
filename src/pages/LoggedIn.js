import PreDraw from "./PreDraw";
import { useState } from "react";
import { getBackendEndpointURL } from "../webconfig";
import PostDraw from "./PostDraw";

function getDrawDate(gameId, setDrawDate) {
  fetch(getBackendEndpointURL(`/game/${gameId}/draw_date`))
    .then((response) => {
      if (response.status == 200) return response.text();
      response.text().then(alert);
    })
    .then((text) => {
      if (text) {
        setDrawDate(text);
      }
    })
    .catch(alert);
}

export default function LoggedIn({ players, gameId, myName, password }) {
  let [drawDate, setDrawDate] = useState("");
  if (drawDate === "") getDrawDate(gameId, setDrawDate);
  var arr = drawDate.split(/[\-\+ :T]/);
  console.log(drawDate);
  console.log(arr);
  var drawDateAsDate = new Date();
  drawDateAsDate.setUTCFullYear(arr[0]);
  drawDateAsDate.setUTCMonth(arr[1] - 1);
  drawDateAsDate.setUTCDate(arr[2]);
  drawDateAsDate.setUTCHours(12);
  //drawDateAsDate.setUTCHours(arr[3]); // currently not working in live due to issue at backend
  //drawDateAsDate.setUTCMinutes(arr[4]);
  //drawDateAsDate.setUTCSeconds(arr[5]);
  console.log(drawDateAsDate.getTime());
  if (drawDateAsDate.getTime() > Date.now()) {
    console.log("pre");
    return <PreDraw players={players} gameId={gameId} drawDate={drawDate} />;
  }
  console.log("post");
  return <PostDraw gameId={gameId} name={myName} password={password} />;
}
