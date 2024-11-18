import {
  ActionIcon,
  AppShell,
  Button,
  Group,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import {
  IconDownload,
  IconEdit,
  IconEye,
  IconTemplate,
} from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { useState, useCallback } from "react";

export default function Header() {
  const [fileName, setFileName] = useState(
    (window as any).myStore?.fileName ?? ""
  );
  const handleSave = useCallback(async () => {
    const myStore = { fileName: fileName };
    const htmlContent = document.documentElement.outerHTML;
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    doc.body.innerHTML = `<div id="root"></div><script>window.myStore = ${JSON.stringify(
      myStore
    )}</script>`;
    const updatedHtmlContent = `<!DOCTYPE html>\n${doc.documentElement.outerHTML}`;

    const blob = new Blob([updatedHtmlContent], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${fileName || "新しいプレゼンテーション"}.pbp.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  }, [fileName]);

  return (
    <AppShell.Header>
      <Group h="100%" px="md" justify="space-between">
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
        <Group>
          <Button variant="tertiary" leftSection={<IconEdit />} disabled>
            編集
          </Button>
          <Button variant="tertiary" leftSection={<IconTemplate />}>
            テーマ
          </Button>
          <Button variant="tertiary" leftSection={<IconEye />}>
            プレビュー
          </Button>
        </Group>
        <Group>
          {/* <TextInput
            value={fileName}
            onChange={(e) => {
              setFileName(e.target.value);
            }}
            placeholder="新しいプレゼンテーション"
            w="14rem"
          /> */}
          <Button
            onClick={handleSave}
            leftSection={<IconDownload />}
            variant="rich"
          >
            ダウンロード
          </Button>
        </Group>
      </Group>
    </AppShell.Header>
  );
}
