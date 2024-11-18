import { Box } from "@mantine/core";

export function SlideMock() {
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
          <rect x="0" y="0" width="1600" height="900" fill="white" />
          <polygon points="0,0 1000,0 600,900 0,900" fill="#f0f0f0" />
          <text
            x="800"
            y="420"
            fontSize="80"
            alignmentBaseline="central"
            textAnchor="middle"
          >
            タイトル
          </text>
          <text
            x="800"
            y="520"
            fontSize="38"
            alignmentBaseline="central"
            textAnchor="middle"
          >
            サブタイトル
          </text>
        </svg>
      </Box>
    </>
  );
}
