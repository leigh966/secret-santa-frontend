import { useState } from "react";
import { useEffect } from "react";

function removeName(name, names, setNames) {
  let newNames = new Set(names);
  newNames.delete(name);
  setNames(newNames);
}

function addName(name, names, setNames) {
  let newNames = new Set(names);
  newNames.add(name);
  setNames(newNames);
}

function onSubmit(value, props, setValue) {
  addName(value, props.names, props.setNames);
  setValue("");
}

export default function InputList(props) {
  useEffect(() => {
    const keyDownHandler = (event) => {
      console.log("User pressed: ", event.key);

      if (event.key === "Enter") {
        event.preventDefault();

        // 👇️ your logic here
        document.getElementById("btnAddName").click();
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  const [value, setValue] = useState("");

  let elems = [];
  props.names.forEach((name) => {
    elems.push(
      <div id="inputGroupsListDiv" class="indentedDiv">
        <label>{name}</label>
        <button
          onClick={() => removeName(name, props.names, props.setNames)}
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
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button id="btnAddName" onClick={() => onSubmit(value, props, setValue)}>
        Submit
      </button>
      {elems}
    </div>
  );
}
