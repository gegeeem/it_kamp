import Demo from "../Card/Card";

export default function Tesla({ tesla, funcState }) {
  return (
    <ul className="list-main">
      {tesla.map((el, i) => (
        <li key={i}>
          <Demo img={el.urlToImage} title={el.title} desc={el.author} />
        </li>
      ))}
    </ul>
  );
}
