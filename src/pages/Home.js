import StartSession from "./StartSession";

function startSession(root) {
  root.render(<StartSession />);
}

export default function Home(props) {
  return <button onClick={() => startSession(props.root)}>Start Now!</button>;
}
