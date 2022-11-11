import { root } from "../Root";
import { BACKEND_URL, JSON_HEADERS, STATUS } from "../webconfig";
import GameCreated from "../pages/GameCreated";

async function postNewGame(props) {
  let groupsString = "[";
  if (props.groupNames.length) {
    props.groupNames.forEach((element) => {
      groupsString += `"${element}",`;
    });
    groupsString = groupsString.substring(0, groupsString.length - 1) + "]";
  } else groupsString += "]";
  let game_id = -1;
  const options = {
    method: "POST",
    headers: JSON_HEADERS,
    body: `{
       "draw": "${props.drawDate}",
       "groups": ${groupsString}
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
  return <button onClick={() => createGame(props)}>Create Game</button>;
}
