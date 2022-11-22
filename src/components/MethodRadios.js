import { Form } from "semantic-ui-react";

const selfRegisterDescription =
  "Create an empty game and recieve a link that players can use to register ";
const preRegisterDescription =
  "Set the game up with all players registered and send out a unique link to each player for them to see their result. (COMING SOON)";

export default function MethodRadios(props) {
  return (
    <Form.Group inline>
      <h3>Registration Method: </h3>
      <div id="methodRadios">
        <Form.Radio
          label="Self-Register"
          checked={props.method === "self"}
          value="self"
          onClick={() => props.setMethod("self")}
        />
        <p class="methodDescriptor">{selfRegisterDescription}</p>
        <Form.Radio
          label="Pre-Register"
          checked={props.method === "pre"}
          value="pre"
          onClick={() => props.setMethod("pre")}
        />
        <p class="methodDescriptor">{preRegisterDescription}</p>
      </div>
    </Form.Group>
  );
}
