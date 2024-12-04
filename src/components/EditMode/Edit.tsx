import { AppShell, Stack } from "@mantine/core";
import { useAtomValue } from "jotai";
import { slideAtom } from "../../atoms/slideAtom";
import { Thumbnail } from "./Thumbnail";
import { EditMain } from "./EditMain";

export default function Edit() {
  const slide = useAtomValue(slideAtom);
  return (
    <>
      <AppShell.Main h="100%" style={{ display: "grid" }}>
        <EditMain />
      </AppShell.Main>
      <AppShell.Navbar>
        <Stack p="xs">
          {slide.pages.map((page, i) => {
            return <Thumbnail key={page.id} pageNum={i + 1} />;
          })}
        </Stack>
      </AppShell.Navbar>
    </>
  );
}
