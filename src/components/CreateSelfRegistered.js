import { root } from "../Root";
import { BACKEND_URL, JSON_HEADERS, STATUS } from "../webconfig";
import GameCreated from "../pages/GameCreated";

async function postNewGame(draw_date) {
  let game_id = -1;
  const options = {
    method: "POST",
    headers: JSON_HEADERS,
    body: `{
       "draw": "${draw_date}"
      }`,
  };
  await fetch(BACKEND_URL + "create-session/self-register", options)
    .then((response) => {
      if (response.status == STATUS.CREATED) return response.text();
    })
    .then((text) => (game_id = text))
    .catch((err) => alert(err));
  return game_id;
}

async function createGame(date) {
  const gameId = await postNewGame(date);
  if (gameId > -1) {
    root.render(<GameCreated gameId={gameId} />);
  }
}

export default function CreateSelfRegistered(props) {
  return (
    <button onClick={() => createGame(props.drawDate)}>Create Game</button>
  );
}
