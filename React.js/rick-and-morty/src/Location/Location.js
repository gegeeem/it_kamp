import ListOfResidents from "../LisOfResidents/ListOfResidents";
import Resident from "../Residents/Residents";

export default function Location({ locationName, dimension, residentArray }) {
  return (
    <div>
      <h3>{locationName}</h3>
      <p>{dimension}</p>
      {/* <ListOfResidents residentsArrayOfString={residentArray} /> */}
    </div>
  );
}
