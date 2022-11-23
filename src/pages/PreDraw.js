import CountdownTimer from "../components/CountdownTimer";

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
    </div>
  );
}
