import { useState } from "react";
import { BACKEND_URL, sendAuthenticatedRequest } from "../webconfig";

function getPickedName(game_id, name, password, setPickedName) {
  const url = `${BACKEND_URL}picked/${game_id}`;
  sendAuthenticatedRequest(url, name, password)
    .then((resp) => {
      if (resp.status === 200 || resp.status === 201) {
        resp.text().then(setPickedName);
      } else {
        resp.text().then(alert);
      }
    })
    .catch(alert);
}

export default function PickedName({ gameId, myName, password }) {
  let [pickedName, setPickedName] = useState("");
  if (pickedName == "") getPickedName(gameId, myName, password, setPickedName);
  return <h1>{pickedName}</h1>;
}
