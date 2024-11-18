import {
  Anchor,
  Button,
  Center,
  Container,
  Divider,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import { IconEdit, IconPlayerPlay } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

export default function Top() {
  return (
    <>
      <Container>
        <Center h="100svh">
          <Stack>
            <Text ta="center" size="42px" c="#666666">
              タイトル
            </Text>
            <Divider w="100%" mt="xs" />
            <Group w="100%" justify="center" my="xs">
              <Button variant="rich" size="lg" leftSection={<IconPlayerPlay />}>
                プレゼンテーションを開始
              </Button>
              <Link to="/edit">
                <Button
                  component="span"
                  variant="secondary"
                  size="lg"
                  leftSection={<IconEdit />}
                >
                  スライドを編集
                </Button>
              </Link>
            </Group>
            <Text
              variant="gradient"
              gradient={{ from: "indigo", to: "grape" }}
              ta="center"
              size="20px"
              fw="lighter"
            >
              This presentation was created by <Anchor>Lu:Fu</Anchor>
            </Text>
          </Stack>
        </Center>
      </Container>
    </>
  );
}
