import Demo from "../Card/Card";
import "./Homepage.css";

export default function HomePage({ bitocin, funcState }) {
  return (
    <ul className="list-name">
      {bitocin.map((el, i) => (
        <li key={i}>
          <Demo img={el.urlToImage} title={el.title} desc={el.author} />
        </li>
      ))}
    </ul>
  );
}
