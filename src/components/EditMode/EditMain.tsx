import { Box } from "@mantine/core";
import { useAtomValue } from "jotai";
import { focusPageNumAtom } from "../../atoms/focusPageAtom";
import { slideAtom } from "../../atoms/slideAtom";
import { RenderObject } from "../Presentation/RenderObject";
import { ObjectEditor } from "./ObjectEditor";

export function EditMain() {
  const focusPageNum = useAtomValue(focusPageNumAtom);
  const slide = useAtomValue(slideAtom);
  const focusPage = slide.pages[focusPageNum - 1];
  return (
    <Box
      p="xs"
      w="100%"
      h="100%"
      style={{
        display: "grid",
        placeItems: "center",
        position: "relative",
      }}
    >
      <svg
        style={{
          width: "100%",
          height: "auto",
          aspectRatio: "16/9",
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
          boxShadow: "2px 2px 8px #00000044",
        }}
        viewBox="0 0 1600 900"
        xmlns="http://www.w3.org/2000/"
      >
        <rect
          x="0"
          y="0"
          width="1600"
          height="900"
          fill={focusPage.backgroundColor ?? "white"}
        />
        {focusPage.objects.map((object) => (
          <RenderObject key={object.id} object={object} />
        ))}
      </svg>
      <Box>
        {focusPage.objects.map((object) => (
          <ObjectEditor key={object.id} object={object} />
        ))}
      </Box>
    </Box>
  );
}
