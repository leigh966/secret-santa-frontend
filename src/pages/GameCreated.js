import { FRONTEND_URL } from "../webconfig";

function GameLink(props) {
  if (props.gameId) {
    const gameLink = `${FRONTEND_URL}game/${props.gameId}`;
    return <a href={gameLink}>{gameLink}</a>;
  }
}

export default function GameCreated(props) {
  return (
    <div>
      <h3>Your game has been created!</h3>
      <GameLink gameId={props.gameId} />
    </div>
  );
}
