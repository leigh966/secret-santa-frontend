import { useState } from "react";
import NameList from "../components/NameList";
import SessionCreated from "./SessionCreated";

function addName(names, setNames) {
  const nameTextbox = document.getElementById("inputName");
  const name = nameTextbox.value.toUpperCase();
  let newNames = new Set(names);
  newNames.add(name);
  setNames(newNames);
  nameTextbox.value = "";
}

function tryStart(names, root) {
  fetch("http://localhost:8000/create-session", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: `{
   "names": ${JSON.stringify(Array.from(names))}
  }`,
  }).then((response) => {
    if (response.status == 201) {
      response
        .text()
        .then((text) =>
          root.render(<SessionCreated root={root} gameId={text} />)
        );
    } else {
      alert("Error: host returned status code " + response.status);
    }
  });
}

function StartButton(props) {
  const MIN_PLAYERS = 3;
  if (props.nameCount < MIN_PLAYERS) return;
  return <button onClick={props.onClick}>Start</button>;
}

export default function StartSession(props) {
  let [names, setNames] = useState(new Set());

  return (
    <div>
      <input
        type="text"
        id="inputName"
        onKeyDown={(event) => {
          if (event.key === "Enter") addName(names, setNames);
        }}
        autoComplete="off"
      ></input>
      <button onClick={() => addName(names, setNames)}>Add</button>

      <StartButton
        nameCount={names.size}
        onClick={() => tryStart(names, props.root)}
      />

      <br />
      <NameList names={names} setNames={setNames} />
    </div>
  );
}
