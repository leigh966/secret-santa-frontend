import { useCallback, useState } from "react";
import LoggedIn from "../pages/LoggedIn";
import { root } from "../Root";
import {
  BACKEND_URL,
  JSON_HEADERS,
  sendAuthenticatedRequest,
  STATUS,
} from "../webconfig";
import NamePasswordForm from "./NamePasswordForm";

let game_id;

function tryLogin(name, password) {
  const url = `${BACKEND_URL}players/${game_id}`;
  sendAuthenticatedRequest(url, name, password)
    .then((response) => {
      if (response.status == STATUS.OK) return response.json();
      alert("backend returned error code: " + response.status);
      return null;
    })
    .then((data) => {
      if (data)
        root.render(
          <LoggedIn
            names={data.names}
            gameId={game_id}
            myName={name}
            password={password}
          />
        );
    })
    .catch(alert);
}

function tryRegister(name, password) {
  const url = `${BACKEND_URL}register/${game_id}`;
  sendAuthenticatedRequest(url, name, password)
    .then((response) => {
      if (response.status == STATUS.CREATED) {
        alert("You have been entered into the draw!");
        tryLogin(name, password);
        return null;
      } else return response.text();
    })
    .then((text) => {
      if (text) alert(text);
    })
    .catch(alert);
}

function RegisterButton(props) {
  if (!props.registering)
    return <button onClick={() => props.setRegistering(true)}>Register</button>;
}

export default function SelfRegister(props) {
  game_id = props.gameId;
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [registering, setRegistering] = useState(false);
  return (
    <div>
      <NamePasswordForm
        name={name}
        password={password}
        setName={setName}
        setPassword={setPassword}
        onSubmit={() => {
          if (registering) {
            tryRegister(name, password);
          } else {
            tryLogin(name, password);
          }
        }}
      />
      <RegisterButton
        registering={registering}
        setRegistering={setRegistering}
      />
    </div>
  );
}
