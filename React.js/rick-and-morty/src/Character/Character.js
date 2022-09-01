import "./Character.css";
export default function Character({ character }) {
  return (
    <li>
      <img src={character.image} />
      <div className="info">
        <h4>{character.name}</h4>
        <p>gender:{character.gender}</p>
        <p>species: {character.species}</p>
        <p>status: {character.status}</p>
      </div>
    </li>
  );
}
