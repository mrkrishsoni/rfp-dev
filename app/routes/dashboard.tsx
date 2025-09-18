import type { Route } from "./+types/dashboard";
import DashboardLayout from "../components/DashboardLayout";
import ComingSoon from "../components/ComingSoon";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Dashboard" }];
}

export default function Dashboard() {
  return (
    <DashboardLayout>
      <ComingSoon />
    </DashboardLayout>
  );
}

