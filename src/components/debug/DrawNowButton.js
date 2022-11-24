import { BACKEND_URL } from "../../urls";

function drawDone() {
  alert("Draw Complete");
  document.location.reload(true);
}

function drawNow(gameId) {
  const url = `${BACKEND_URL}start/${gameId}`;
  const options = {
    method: "POST",
  };
  fetch(url, options)
    .then((resp) => {
      if (resp.status === 201) drawDone();
      else resp.text().then(alert);
    })
    .catch((err) => alert(err));
}

export default function DrawNowButton({ gameId }) {
  return (
    <button onClick={() => drawNow(gameId)}>DEBUG! Draw Now !DEBUG</button>
  );
}
