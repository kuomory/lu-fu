import { ActionIcon, Button, Group } from "@mantine/core";
import { IconEdit, IconTemplate, IconEye } from "@tabler/icons-react";
import { useAtom } from "jotai";
import { Mode, modeAtom } from "../../atoms/modeAtom";
import { useCallback } from "react";

export function ModeSwitcher() {
  const [mode, setMode] = useAtom(modeAtom);
  const handleClickMode = useCallback(
    (mode: Mode) => () => {
      setMode(mode);
    },
    [setMode]
  );
  return (
    <>
      <Group visibleFrom="md">
        <Button
          variant={mode === Mode.editMode ? "primary" : "secondary"}
          leftSection={<IconEdit />}
          onClick={handleClickMode(Mode.editMode)}
        >
          編集
        </Button>
        <Button
          variant={mode === Mode.themeMode ? "primary" : "secondary"}
          leftSection={<IconTemplate />}
          onClick={handleClickMode(Mode.themeMode)}
        >
          テーマ
        </Button>
        <Button
          variant={mode === Mode.previewMode ? "primary" : "secondary"}
          leftSection={<IconEye />}
          onClick={handleClickMode(Mode.previewMode)}
        >
          プレビュー
        </Button>
      </Group>
      <Group hiddenFrom="md">
        <ActionIcon.Group>
          <ActionIcon
            size="lg"
            variant={mode === Mode.editMode ? "primary" : "secondary"}
            aria-label="編集"
            onClick={handleClickMode(Mode.editMode)}
          >
            <IconEdit />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant={mode === Mode.themeMode ? "primary" : "secondary"}
            aria-label="テーマ"
            onClick={handleClickMode(Mode.themeMode)}
          >
            <IconTemplate />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant={mode === Mode.previewMode ? "primary" : "secondary"}
            aria-label="プレビュー"
            onClick={handleClickMode(Mode.previewMode)}
          >
            <IconEye />
          </ActionIcon>
        </ActionIcon.Group>
      </Group>
    </>
  );
}
