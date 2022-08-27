function PickedName() {
  return <h1>Still need to pick a name</h1>;
}

export default function PostDraw({ gameId, username, password }) {
  return <PickedName gameId={gameId} username={username} password={password} />;
}
