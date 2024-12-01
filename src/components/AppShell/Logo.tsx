import { Text } from "@mantine/core";
import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Text
        variant="gradient"
        gradient={{ from: "indigo", to: "grape", deg: 45 }}
        size="1.75rem"
        fw="normal"
      >
        Lu:Fu
      </Text>
    </Link>
  );
}
