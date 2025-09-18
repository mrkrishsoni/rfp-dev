import type { Route } from "./+types/team-invite";
import DashboardLayout from "../components/DashboardLayout";
import ComingSoon from "../components/ComingSoon";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Invite Member" }];
}

export default function TeamInvite() {
  return (
    <DashboardLayout>
      <ComingSoon />
    </DashboardLayout>
  );
}

