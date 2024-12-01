import { AppShell, Group } from "@mantine/core";
import { Logo } from "./Logo";
import { ModeSwitcher } from "./ModeSwitcher";
import { DownloadButton } from "./DownloadButton";

export default function Header() {
  return (
    <AppShell.Header>
      <Group h="100%" px="md" justify="space-between">
        <Logo />
        <ModeSwitcher />
        <DownloadButton />
      </Group>
    </AppShell.Header>
  );
}
