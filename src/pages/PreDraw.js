import CountdownTimer from "../components/CountdownTimer";
import DrawNowButton from "../components/debug/DrawNowButton";

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
  return (
    <div>
      <h3>Names will be drawn in:</h3>
      <CountdownTimerWhenReady drawDate={props.drawDate} />
      <h3>Players currently entered into the draw:</h3>
      <EnteredNameList names={props.names} />
      <DrawNowButton gameId={props.gameId} />
    </div>
  );
}
