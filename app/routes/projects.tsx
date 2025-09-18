import type { Route } from "./+types/projects";
import DashboardLayout from "../components/DashboardLayout";
import ComingSoon from "../components/ComingSoon";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Projects" }];
}

export default function Projects() {
  return (
    <DashboardLayout>
      <ComingSoon />
    </DashboardLayout>
  );
}

