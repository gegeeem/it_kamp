import axios from "axios";
import { useEffect, useState } from "react";

export default function Residents({ residentData }) {
  const [res, setRes] = useState(""); // object character
  useEffect(() => {
    axios.get(residentData).then((result) => setRes(result));
  }, []);
  console.log("res.data", res.data.image);
  return (
    <div className="residentPic">
      <img src={res.data.image} />
      
      
    </div>
  );
}
