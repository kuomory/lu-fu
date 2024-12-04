import { AppShell, Group } from "@mantine/core";
import { Logo } from "./Logo";
import { ModeSwitcher } from "./ModeSwitcher";
import { DownloadButton } from "./DownloadButton";

export default function Header() {
  return (
    <AppShell.Header style={{ zIndex: 102, boxShadow: "0 0 4px #00000044" }}>
      <Group h="100%" px="md" justify="space-between">
        <Logo />
        <ModeSwitcher />
        <DownloadButton />
      </Group>
    </AppShell.Header>
  );
}
