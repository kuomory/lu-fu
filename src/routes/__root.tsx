import { AppShell } from "@mantine/core";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <AppShell
        header={{ height: "4rem" }}
        navbar={{ width: "15%", breakpoint: "sm" }}
        aside={{ width: "15%", breakpoint: "sm" }}
      >
        <Outlet />
        <TanStackRouterDevtools />
      </AppShell>
    </>
  ),
});
