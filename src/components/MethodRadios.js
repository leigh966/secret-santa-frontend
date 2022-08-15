import { Form } from "semantic-ui-react";

export default function MethodRadios(props) {
  return (
    <Form.Group inline>
      <label>Registration Method: </label>
      <Form.Radio
        label="Make Players Self-Register"
        checked={props.method === "self"}
        value="self"
        onClick={() => props.setMethod("self")}
      />
      <Form.Radio
        label="Pre-Register Players"
        checked={props.method === "pre"}
        value="pre"
        onClick={() => props.setMethod("pre")}
      />
    </Form.Group>
  );
}
