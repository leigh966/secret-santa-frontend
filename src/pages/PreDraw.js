import { useState } from "react";
import { BACKEND_URL } from "../webconfig";
import CountdownTimer from "../components/CountdownTimer";
import DrawNowButton from "../components/debug/DrawNowButton";

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

function CountdownTimerWhenReady({ drawDate }) {
  if (drawDate) return <CountdownTimer targetDate={drawDate} />;
}

function EnteredNameList({ names }) {
  let elements = [];
  names.forEach((element) => {
    elements.push(<li>{element}</li>);
  });
  return <ul>{elements}</ul>;
}

export default function PreDraw(props) {
  let [drawDate, setDrawDate] = useState("");
  if (drawDate === "") getDrawDate(props.gameId, setDrawDate);
  return (
    <div>
      <h3>Names will be drawn in:</h3>
      <CountdownTimerWhenReady drawDate={drawDate} />
      <h3>Players currently entered into the draw:</h3>
      <EnteredNameList names={props.names} />
      <DrawNowButton gameId={props.gameId} />
    </div>
  );
}
