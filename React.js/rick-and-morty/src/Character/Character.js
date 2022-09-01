import "./Character.css";
export default function Character({ character }) {
  return (
    <li>
      <img src={character.image} />
      <div className="info">
        <h3>{character.name}</h3>
        <p>{character.gender}</p>
        <p>{character.status}</p>
      </div>
    </li>
  );
}
