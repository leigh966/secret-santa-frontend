import CountdownTimer from "../components/CountdownTimer";
import DrawNowButton from "../components/debug/DrawNowButton";
import { DEBUG } from "../debug";

function CountdownTimerWhenReady({ drawDate }) {
  if (drawDate) return <CountdownTimer targetDate={drawDate} />;
}

function EnteredNameList({ players }) {
  let elements = [];
  players.forEach((element) => {
    elements.push(
      <li>
        {element.name} - {element.group}
      </li>
    );
  });
  return <ul>{elements}</ul>;
}

function getDrawNowButton(gameId) {
  if (DEBUG) {
    return <DrawNowButton gameId={gameId} />;
  }
}

export default function PreDraw(props) {
  return (
    <div>
      <h3>Names will be drawn in:</h3>
      <CountdownTimerWhenReady drawDate={props.drawDate} />
      <h3>Players currently entered into the draw:</h3>
      <EnteredNameList players={props.players} />
      {getDrawNowButton(props.gameId)}
    </div>
  );
}
