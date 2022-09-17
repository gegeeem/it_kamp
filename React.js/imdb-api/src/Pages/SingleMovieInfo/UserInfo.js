import { User } from "@nextui-org/react";

export default function UserInfo({ imgSrc, name, asCharacter }) {
  return (
    <User
      size="xl"
      src={imgSrc}
      name={name}
      description={asCharacter}
      style={{ marginBottom: "8px" }}
    />
  );
}
