import { createFileRoute, Navigate, useParams } from "@tanstack/react-router";
import { useAtomValue } from "jotai";
import { slideAtom } from "../../../atoms/slideAtom";
import { Text } from "@mantine/core";
import { SlideTop } from "../../../components/Presentation/SlideTop";
import { EndOfSlide } from "../../../components/Presentation/EndOfSlide";

export const Route = createFileRoute(
  "/_presentationTemplate/presentation/$pageNum",
)({
  component: Page,
});

function Page() {
  const { pageNum: pageNumParam } = Route.useParams();
  const pageNum = Number(pageNumParam);
  const slides = useAtomValue(slideAtom);
  if (Number.isNaN(pageNum) || pageNum < 1 || slides.pages.length < pageNum)
    return <EndOfSlide />;
  if (pageNum === 1) return <Navigate to="/presentation" />;
  return <SlideTop pageNum={pageNum} />;
}
