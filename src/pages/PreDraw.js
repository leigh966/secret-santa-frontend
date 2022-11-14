import CountdownTimer from "../components/CountdownTimer";
import DrawNowButton from "../components/debug/DrawNowButton";

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

export default function PreDraw(props) {
  return (
    <div>
      <h3>Names will be drawn in:</h3>
      <CountdownTimerWhenReady drawDate={props.drawDate} />
      <h3>Players currently entered into the draw:</h3>
      <EnteredNameList players={props.players} />
      <DrawNowButton gameId={props.gameId} />
    </div>
  );
}
