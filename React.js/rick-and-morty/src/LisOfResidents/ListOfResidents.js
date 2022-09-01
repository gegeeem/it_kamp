import Residents from "../Residents/Residents";

export default function ListOfResidents({ residentsArrayOfString }) {
  return (
    <ul>
      {residentsArrayOfString !== undefined
        ? residentsArrayOfString.map((el, i) => (
            <Residents key={i} residentData={el} />
          ))
        : ""}
    </ul>
  );
}
