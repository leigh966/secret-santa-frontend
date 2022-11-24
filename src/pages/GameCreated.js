import { FRONTEND_URL } from "../urls";

function GameLink(props) {
  if (props.gameId) {
    const to = `game/${props.gameId}`;
    const gameLink = FRONTEND_URL + to;
    return (
      <a
        href={gameLink}
        onClick={() => {
          window.location.replace(gameLink);
          window.location.reload(false);
        }}
      >
        {gameLink}
      </a>
    );
  }
}

export default function GameCreated(props) {
  return (
    <div className="centredDiv">
      <h3>Your game has been created!</h3>
      <GameLink gameId={props.gameId} />
    </div>
  );
}
