import Demo from "../Card/Card";

export default function Techcrunch({ techcrunch, funcState }) {
  return (
    <ul className="list-main">
      {techcrunch.map((el, i) => (
        <li key={i}>
          <Demo img={el.urlToImage} title={el.title} desc={el.author} />
        </li>
      ))}
    </ul>
  );
}
