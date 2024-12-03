import { createFileRoute } from "@tanstack/react-router";
import { SlideTop } from "../../../components/Presentation/SlideTop";

export const Route = createFileRoute("/_presentationTemplate/presentation/")({
  component: Page,
});

function Page() {
  return (
    <>
      <SlideTop pageNum={1} />
    </>
  );
}
