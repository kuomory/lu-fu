import { createFileRoute, Outlet } from "@tanstack/react-router";
import Header from "../components/AppShell/Header";

export const Route = createFileRoute("/_editTemplate")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
