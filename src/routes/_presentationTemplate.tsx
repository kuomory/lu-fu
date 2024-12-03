import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_presentationTemplate")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Outlet />
    </>
  );
}
