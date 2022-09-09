import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import "./Card.css";

export default function Demo({ img, title, desc }) {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder className="card-container">
      <Card.Section>
        <Image src={img} height={160} alt="Norway" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        {/* <Badge color="pink" variant="light">
          On Sale
        </Badge> */}
      </Group>

      <Text size="sm" color="dimmed">
        author: {desc}
      </Text>

      {/* <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button> */}
    </Card>
  );
}
