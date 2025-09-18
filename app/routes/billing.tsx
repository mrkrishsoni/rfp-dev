import type { Route } from "./+types/billing";
import DashboardLayout from "../components/DashboardLayout";
import ComingSoon from "../components/ComingSoon";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Billing" }];
}

export default function Billing() {
  return (
    <DashboardLayout>
      <ComingSoon />
    </DashboardLayout>
  );
}

