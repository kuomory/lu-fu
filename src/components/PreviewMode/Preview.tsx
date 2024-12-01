import { AppShell, Container, Stack } from "@mantine/core";

export function Preview() {
  return (
    <>
      <AppShell.Main>
        <Container>
          <Stack>プレビュー</Stack>
        </Container>
      </AppShell.Main>
      <AppShell.Navbar>プレビュー</AppShell.Navbar>
    </>
  );
}
