import { root } from "../Root";
import CreateGame from "./CreateGame";

function startCreatingGame() {
  root.render(<CreateGame />);
}

export default function Home() {
  return <button onClick={startCreatingGame}>Start Now!</button>;
}
