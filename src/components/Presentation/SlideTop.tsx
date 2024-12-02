import { useAtom } from "jotai";
import { slideAtom } from "../../atoms/slideAtom";
import { Box } from "@mantine/core";
import { ShapeObject } from "./ShapeObject";

type Props = {
  pageNum: number;
};

export function SlideTop(props: Props) {
  const { pageNum } = props;
  const [slide, setSlide] = useAtom(slideAtom);
  const focusPage = slide.pages[pageNum - 1];

  return (
    <>
      <Box
        w="100vw"
        h="100svh"
        style={{ overflow: "hidden", display: "grid", placeItems: "center" }}
        bg="#212121"
      >
        <svg
          style={{
            width: "100%",
            height: "auto",
            aspectRatio: "16/9",
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
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
            <ShapeObject key={object.id} object={object} />
          ))}
        </svg>
      </Box>
    </>
  );
}
