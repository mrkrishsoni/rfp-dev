import type { Route } from "./+types/integrations";
import DashboardLayout from "../components/DashboardLayout";
import ComingSoon from "../components/ComingSoon";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Integrations" }];
}

export default function Integrations() {
  return (
    <DashboardLayout>
      <ComingSoon />
    </DashboardLayout>
  );
}

