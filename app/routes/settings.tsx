import type { Route } from "./+types/settings";
import DashboardLayout from "../components/DashboardLayout";
import ComingSoon from "../components/ComingSoon";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Settings" }];
}

export default function Settings() {
  return (
    <DashboardLayout>
      <ComingSoon />
    </DashboardLayout>
  );
}

