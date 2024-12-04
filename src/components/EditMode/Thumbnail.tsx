import { Paper, UnstyledButton } from "@mantine/core";
import { useAtom, useAtomValue } from "jotai";
import { slideAtom } from "../../atoms/slideAtom";
import { RenderObject } from "../Presentation/RenderObject";
import { focusPageNumAtom } from "../../atoms/focusPageAtom";
import { useCallback } from "react";

type Props = {
  pageNum: number;
};

export function Thumbnail(props: Props) {
  const slide = useAtomValue(slideAtom);
  const page = slide.pages[props.pageNum - 1];
  const [focusPageNum, setFocusPageNum] = useAtom(focusPageNumAtom);
  const handleClickThumbnail = useCallback(() => {
    setFocusPageNum(props.pageNum);
  }, [setFocusPageNum]);
  return (
    <Paper
      shadow="xs"
      radius="md"
      style={{
        border:
          focusPageNum === props.pageNum
            ? "2px solid var(--mantine-color-yellow-outline)"
            : "none",
        width: "100%",
        height: "auto",
        aspectRatio: "16/9",
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      <UnstyledButton
        onClick={handleClickThumbnail}
        style={{
          width: "100%",
          height: "auto",
          aspectRatio: "16/9",
          maxWidth: "100%",
        }}
      >
        <svg
          style={{
            width: "100%",
            height: "100%",
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
            fill={page.backgroundColor ?? "white"}
          />
          {page.objects.map((object) => (
            <RenderObject key={object.id} object={object} />
          ))}
        </svg>
      </UnstyledButton>
    </Paper>
  );
}
