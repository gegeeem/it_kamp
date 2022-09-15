import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import "./CardMovies.css";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function CardMovie({ img, title, desc, func }) {
  const { id } = useParams();
  const [singleMovie, setSingleMovie] = useState({});

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder className="card-container">
      <Card.Section>
        <Image src={img} height={400} alt={title} />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        {/* <Badge color="pink" variant="light">
          On Sale
        </Badge> */}
      </Group>

      <Text size="sm" color="dimmed">
        description: {desc}
      </Text>

      {/* <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button> */}
      <Button
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={func}
      ></Button>
    </Card>
  );
}
