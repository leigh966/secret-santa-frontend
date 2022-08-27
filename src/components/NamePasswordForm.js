export default function NamePasswordForm(props) {
  return (
    <div>
      <input
        value={props.name}
        type="text"
        placeholder="Name"
        onChange={(event) => props.setName(event.target.value)}
      />
      <input
        value={props.password}
        type="text"
        placeholder="Password"
        onChange={(event) => props.setPassword(event.target.value)}
      />
      <button onClick={props.onSubmit}>
        {props.submitText ? props.submitText : "Submit"}
      </button>
    </div>
  );
}
