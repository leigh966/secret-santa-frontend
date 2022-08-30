import PickedName from "../components/PickedName";

export default function PostDraw({ gameId, name, password }) {
  return <PickedName gameId={gameId} myName={name} password={password} />;
}
