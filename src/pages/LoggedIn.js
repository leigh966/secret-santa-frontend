import PreDraw from "./PreDraw";
import { useState } from "react";
import { BACKEND_URL } from "../webconfig";
import PostDraw from "./PostDraw";

function PrePostDecider() {}

function getDrawDate(gameId, setDrawDate) {
  fetch(BACKEND_URL + `/game/${gameId}/draw_date`)
    .then((response) => {
      if (response.status == 200) return response.text();
      response.text().then(alert);
    })
    .then((text) => {
      if (text) {
        var date = new Date(text + " utc");
        setDrawDate(date.toString());
      }
    })
    .catch(alert);
}

export default function LoggedIn({ names, gameId, myName, password }) {
  let [drawDate, setDrawDate] = useState("");
  if (drawDate === "") getDrawDate(gameId, setDrawDate);
  const drawDateAsDate = new Date(drawDate);
  if (drawDateAsDate.getTime() > Date.now())
    return <PreDraw names={names} gameId={gameId} drawDate={drawDate} />;
  return <PostDraw gameId={gameId} name={myName} password={password} />;
}
