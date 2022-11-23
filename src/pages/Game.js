import { getBackendEndpointURL, STATUS } from "../webconfig";
import NoPage from "./NoPage";
import { root } from "../Root";
import { useParams } from "react-router-dom";
import { useState } from "react";
import SelfRegister from "../components/SelfRegister";
import { Helmet } from "react-helmet";

function getGameDrawDate(gameId, setDrawDate) {
  fetch(getBackendEndpointURL(`game/${gameId}/draw_date`))
    .then((response) => {
      if (response.status === STATUS.OK) return response.text();
      else root.render(<NoPage />);
    })
    .then(setDrawDate)
    .catch(console.log);
}

export default function Game() {
  let { id } = useParams();
  let [drawDate, setDrawDate] = useState("");
  if (drawDate === "") {
    getGameDrawDate(id, setDrawDate);
  }
  return (
    <div className="Login">
      <Helmet>
        <link rel="stylesheet" href="LoginPage.css" />
      </Helmet>
      <SelfRegister gameId={id} />
    </div>
  );
}
