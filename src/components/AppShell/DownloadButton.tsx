import { ActionIcon, Button } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import { useState, useCallback } from "react";

export function DownloadButton() {
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
    <>
      <Button
        onClick={handleSave}
        leftSection={<IconDownload />}
        variant="rich"
        visibleFrom="md"
      >
        ダウンロード
      </Button>
      <ActionIcon variant="rich" size="lg" hiddenFrom="md">
        <IconDownload onClick={handleSave} />
      </ActionIcon>
    </>
  );
}
