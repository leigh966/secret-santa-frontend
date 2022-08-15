import { BACKEND_URL } from "../webconfig";
import NoPage from "./NoPage";
import { root } from "../Root";
import { useParams } from "react-router-dom";
import { useState } from "react";

function getGameDrawDate(gameId, setDrawDate) {
  fetch(`${BACKEND_URL}/game/${gameId}/draw_date`)
    .then((response) => {
      if (response.status === 200) return response.text();
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
  return <h1>{drawDate}</h1>;
}
