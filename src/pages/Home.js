import { root } from "../Root";
import CreateGame from "./CreateGame";
import { Helmet } from "react-helmet";
import SnowStorm from "../components/SnowStorm";

function startCreatingGame() {
  root.render(<CreateGame />);
}

export default function Home() {
  return (
    <div className="Home">
      v1.2.3
      <Helmet>
        <link rel="stylesheet" href="Home.css" />
      </Helmet>
      <div className="msgNbtn">
        <h1 id="h1SecretSanta">Secret Santa</h1>
        <button onClick={startCreatingGame} className="btnStart">
          Start Now!
        </button>
      </div>
      <b>
        <div id="divCredit">
          <p id="pCredit">by Leigh Hurley</p>
        </div>
      </b>
      <SnowStorm />
    </div>
  );
}
