export default function SessionCreated(props) {
  const link = window.location.href + "session/" + props.gameId;
  return (
    <>
      <p>Session Created!</p>
      <p>Here is the link to your game:</p>
      <a href={link}>{link}</a>
      <p>Send this link to all players to allow them to access the game!</p>
    </>
  );
}
