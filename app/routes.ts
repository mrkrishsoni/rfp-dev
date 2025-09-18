import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/team", "routes/team.tsx"),
  route("/dashboard", "routes/dashboard.tsx"),
  route("/projects", "routes/projects.tsx"),
  route("/integrations", "routes/integrations.tsx"),
  route("/settings", "routes/settings.tsx"),
  route("/billing", "routes/billing.tsx"),
  route("/team/invite", "routes/team-invite.tsx"),
] satisfies RouteConfig;
