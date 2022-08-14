import { useState } from "react";

function addName(names, setNames) {
  const nameTextbox = document.getElementById("inputName");
  const name = nameTextbox.value.toUpperCase();
  let newNames = new Set(names);
  newNames.add(name);
  setNames(newNames);
  nameTextbox.value = "";
}

function StartButton(props) {
  const MIN_PLAYERS = 3;
  if (props.nameCount < MIN_PLAYERS) return;
  return <button>Start</button>;
}

function removeName(name, names, setNames) {
  let newNames = new Set(names);
  newNames.delete(name);
  setNames(newNames);
}

export default function StartSession() {
  let [names, setNames] = useState(new Set());
  let elems = [];
  console.log(names);
  names.forEach((name) => {
    elems.push(
      <div className="NameListItemDiv">
        <h3 className="InputtedName NameListComponent">{name}</h3>
        <button
          onClick={() => removeName(name, names, setNames)}
          className="NameListComponent"
          id="btnDeleteName"
        >
          x
        </button>
      </div>
    );
  });
  return (
    <div>
      <input
        type="text"
        id="inputName"
        onKeyDown={(event) => {
          if (event.key === "Enter") addName(names, setNames);
        }}
      ></input>
      <button onClick={() => addName(names, setNames)}>Add</button>
      {<StartButton nameCount={names.size} />}
      <br />
      {elems}
    </div>
  );
}
