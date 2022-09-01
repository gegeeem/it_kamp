import axios from "axios";
import { useEffect, useState } from "react";

export default function Residents({ residentData }) {
  const [res, setRes] = useState({}); // object character
  useEffect(() => {
    if (residentData) {
      axios.get(residentData).then((result) => setRes(result));
    }
  }, []);
  return (
    <div className="residentPic">
      <img src={res ? res.image : ""} />
    </div>
  );
}
