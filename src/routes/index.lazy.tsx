import { createLazyFileRoute } from "@tanstack/react-router";
import Top from "../components/TopPage/Top";
import { SlideMock } from "../components/TopPage/SlideMock";
import { Box } from "@mantine/core";

export const Route = createLazyFileRoute("/")({
  component: Page,
});

function Page() {
  return (
    <>
      <Box
        w="100vw"
        h="100svh"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -2,
        }}
      >
        <SlideMock />
      </Box>
      <Box
        w="100vw"
        h="100svh"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          backdropFilter: "blur(8px)",
          backgroundColor: "#ffffffbb",
          zIndex: -1,
        }}
      />
      <Top />
    </>
  );
}
