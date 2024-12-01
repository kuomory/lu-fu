import { AppShell, Container, Stack } from "@mantine/core";

export default function Theme() {
  return (
    <>
      <AppShell.Main>
        <Container>
          <Stack>Main</Stack>
        </Container>
      </AppShell.Main>
      <AppShell.Navbar>テンプレート</AppShell.Navbar>
    </>
  );
}
