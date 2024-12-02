import { createFileRoute, Navigate, useParams } from "@tanstack/react-router";
import { useAtomValue } from "jotai";
import { slideAtom } from "../../atoms/slideAtom";
import { Text } from "@mantine/core";

export const Route = createFileRoute("/presentation/$pageNum")({
  component: Page,
});

function Page() {
  const { pageNum: pageNumParam } = Route.useParams();
  const pageNum = Number(pageNumParam);
  const slides = useAtomValue(slideAtom);
  if (Number.isNaN(pageNum) || pageNum < 1 || slides.pages.length < pageNum)
    return <Text>Error! something wrong</Text>;
  if (pageNum === 1) return <Navigate to="/presentation" />;
  return "Hello /presentation/$pageNum!";
}
