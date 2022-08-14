import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";

function removeName(name, names, setNames) {
  let newNames = new Set(names);
  newNames.delete(name);
  setNames(newNames);
}

export default function NameList(props) {
  let elems = [];
  props.names.forEach((name) => {
    elems.push(
      <div className="NameListItemDiv">
        <h3 className="InputtedName NameListComponent">{name}</h3>
        <button
          onClick={() => removeName(name, props.names, props.setNames)}
          className="NameListComponent"
          id="btnDeleteName"
        >
          x
        </button>
      </div>
    );
  });
  return elems;
}
