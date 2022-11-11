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
      <Helmet>
        <link rel="stylesheet" href="Home.css" />
      </Helmet>
      <div className="msgNbtn">
        <button onClick={startCreatingGame} className="btnStart">
          Start Now!
        </button>
      </div>
      <p className="credit">by Leigh Hurley</p>
      <SnowStorm />
    </div>
  );
}
