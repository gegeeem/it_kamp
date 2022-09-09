import { Button } from "@mantine/core";

export default function Btn({ name, func, variant = "outline" }) {
  return (
    <Button onClick={func} variant={variant}>
      {name}
    </Button>
  );
}
