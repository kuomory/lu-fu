import { Box, Button, Container, Group, Stack, Title } from "@mantine/core";
import { Link } from "@tanstack/react-router";

export function EndOfSlide() {
  return (
    <>
      <Box
        w="100vw"
        h="100svh"
        style={{ overflow: "hidden", display: "grid", placeItems: "center" }}
        bg="#212121"
      >
        <Container>
          <Stack align="center">
            <Title c="white" fw="normal">
              スライドは以上です
            </Title>
            <Group>
              <Link to="/">
                <Button component="span" variant="rich" size="md">
                  トップに戻る
                </Button>
              </Link>
            </Group>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
