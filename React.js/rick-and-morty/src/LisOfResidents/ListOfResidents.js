import { useState, useEffect } from "react";
import Residents from "../Residents/Residents";
import axios from "axios";

export default function ListOfResidents({ residentsArrayOfString }) {
  const [res, setRes] = useState({}); // object character
  // useEffect(() => {
  //   if (residentData) {
  //     axios.get(residentData).then((result) => setRes(result));
  //   }
  // }, []);

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
