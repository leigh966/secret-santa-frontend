import { useState } from "react";
import LoggedIn from "../pages/LoggedIn";
import { root } from "../Root";
import {
  BACKEND_URL,
  getBackendEndpointURL,
  sendAuthenticatedRequest,
  STATUS,
} from "../webconfig";
import GroupDropdown from "./GroupDropdown";
import NamePasswordForm from "./NamePasswordForm";

let game_id;

function tryLogin(name, password) {
  const url = getBackendEndpointURL(`players/${game_id}`);
  sendAuthenticatedRequest(url, name, password)
    .then((response) => {
      if (response.status == STATUS.OK) return response.json();
      alert("backend returned error code: " + response.status);
      return null;
    })
    .then((data) => {
      if (data) {
        root.render(
          <LoggedIn
            players={data}
            gameId={game_id}
            myName={name}
            password={password}
          />
        );
      }
    })
    .catch(alert);
}

function tryRegister(name, password, groupId) {
  console.log(groupId);
  const url = getBackendEndpointURL(`register/${game_id}`);
  sendAuthenticatedRequest(url, name, password, "group_id", groupId)
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

function getGroupDropdown(
  dropDownSelection,
  setDropdown,
  game_id,
  registering
) {
  if (registering)
    return (
      <GroupDropdown
        current={dropDownSelection}
        handler={setDropdown}
        gameId={game_id}
      />
    );
}

function getHeader(registering) {
  if (registering) return <h1 id="loginHeading">Register</h1>;
  else return <h1 id="loginHeading">Log In</h1>;
}

export default function SelfRegister(props) {
  game_id = props.gameId;
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [registering, setRegistering] = useState(false);
  let [dropDownSelection, setDropdown] = useState(null); // needs to be falsy for placeholder to show
  return (
    <div id="divLogin">
      {getHeader(registering)}
      <NamePasswordForm
        name={name}
        password={password}
        setName={setName}
        setPassword={setPassword}
        onSubmit={() => {
          if (registering) {
            tryRegister(
              name,
              password,
              dropDownSelection ? dropDownSelection.value : null
            );
          } else {
            tryLogin(name, password);
          }
        }}
      />
      {getGroupDropdown(dropDownSelection, setDropdown, game_id, registering)}
      <RegisterButton
        registering={registering}
        setRegistering={setRegistering}
      />
    </div>
  );
}
