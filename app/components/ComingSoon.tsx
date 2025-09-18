import { Button } from "flowbite-react";
import { Link, useLocation } from "react-router";

export default function ComingSoon() {
  const { pathname } = useLocation();
  const title = pathname.replace(/^\//, "").replace(/-/g, " ") || "coming soon";

  return (
    <div className="p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold capitalize">{title}</h1>
        <Button as={Link} to="/team" color="light" pill>
          Back to Team
        </Button>
      </div>
      <div className="rounded-lg border border-gray-800 bg-black p-8 text-center">
        <p className="text-lg">This section is coming soon.</p>
      </div>
    </div>
  );
}
