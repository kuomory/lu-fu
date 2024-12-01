import { createLazyFileRoute } from "@tanstack/react-router";
import Edit from "../../../components/EditMode/Edit";
import { useAtomValue } from "jotai";
import { Mode, modeAtom } from "../../../atoms/modeAtom";
import Theme from "../../../components/ThemeMode/Theme";
import { Preview } from "../../../components/PreviewMode/Preview";

export const Route = createLazyFileRoute("/_editTemplate/edit/")({
  component: Page,
});

function Page() {
  const mode = useAtomValue(modeAtom);
  return (
    <>
      {mode === Mode.editMode && <Edit />}
      {mode === Mode.themeMode && <Theme />}
      {mode === Mode.previewMode && <Preview />}
    </>
  );
}
