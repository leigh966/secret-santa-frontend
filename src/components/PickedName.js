import { useState } from "react";
import {
  getBackendEndpointURL,
  sendAuthenticatedRequest,
  STATUS,
} from "../webconfig";

function getPickedName(game_id, name, password, setPickedName) {
  const url = getBackendEndpointURL(`picked/${game_id}`);
  sendAuthenticatedRequest(url, name, password)
    .then((resp) => {
      if (resp.status === STATUS.OK || resp.status === STATUS.CREATED) {
        resp.text().then(setPickedName);
      } else {
        resp.text().then((txt) => {
          console.log("txt: " + txt);
          if (txt != "Not ready to draw") alert(txt);
        });
      }
    })
    .catch(alert);
}

export default function PickedName({ gameId, myName, password }) {
  let [pickedName, setPickedName] = useState("");
  if (pickedName == "") getPickedName(gameId, myName, password, setPickedName);
  return <h1>{pickedName}</h1>;
}
