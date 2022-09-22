import { useContext } from "react";
import { MainValue } from "../ContextValue";

export default function Page1({ funcChangeVal }) {
  const ShowValue = useContext(MainValue);
  return (
    <>
      Page1 says: {ShowValue}
      <button onClick={funcChangeVal}>Change value</button>
    </>
  );
}
