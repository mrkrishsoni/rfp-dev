import {
  Sidebar,
  SidebarItems,
  SidebarItemGroup,
  SidebarItem,
  Button,
  Avatar,
  Tooltip,
} from "flowbite-react";
import { Link, useLocation } from "react-router";
import { useState, type CSSProperties, type FC, type SVGProps } from "react";
import {
  UserAddIcon,
  ClipboardIcon,
  FolderIcon,
  GridIcon,
  UsersGroupIcon,
  EditBrushIcon,
  WandIcon,
  ChartPieIcon,
  UserIcon,
  ChevronsLeftIcon,
} from "../icons";

const ClipboardSvg: FC<SVGProps<SVGSVGElement>> = (props) => (
  <ClipboardIcon {...props} />
);
const FolderSvg: FC<SVGProps<SVGSVGElement>> = (props) => (
  <FolderIcon {...props} />
);
const GridSvg: FC<SVGProps<SVGSVGElement>> = (props) => <GridIcon {...props} />;
const UsersGroupSvg: FC<SVGProps<SVGSVGElement>> = (props) => (
  <UsersGroupIcon {...props} />
);
const EditBrushSvg: FC<SVGProps<SVGSVGElement>> = (props) => (
  <EditBrushIcon {...props} />
);
const WandIconSvg: FC<SVGProps<SVGSVGElement>> = (props) => (
  <WandIcon {...props} />
);
const ChartPieSvg: FC<SVGProps<SVGSVGElement>> = (props) => (
  <ChartPieIcon {...props} />
);

type LayoutProps = {
  children: React.ReactNode;
};

const members = [
  { name: "Rakesh Soni", email: "rakesh@email.com", color: "indigo" },
  { name: "Vardham Jain", email: "vardham@email.com", color: "blue" },
  { name: "Irya Patni", email: "irya@email.com", color: "purple" },
  { name: "Tattvarth Shah", email: "tattvarth@email.com", color: "cyan" },
  { name: "Henry Robert", email: "henry@email.com", color: "green" },
  { name: "Joyelle Harris", email: "joyelle@email.com", color: "pink" },
  { name: "Auton Thomas", email: "auton@email.com", color: "gray" },
  { name: "Arghya Kumar", email: "arghya@email.com", color: "orange" },
];

export default function DashboardLayout({ children }: LayoutProps) {
  const { pathname } = useLocation();
  const [isTeamSidebarOpen, setTeamSidebarOpen] = useState(true);
  const isTeamRoute = pathname.startsWith("/team");
  const sidebarWidth = isTeamSidebarOpen ? "240px" : "0px";
  const layoutStyle = {
    "--sidebar-width": sidebarWidth,
  } as CSSProperties;

  const handleTeamSidebarToggle = () => {
    setTeamSidebarOpen((previous) => !previous);
  };

  return (
    <div
      className="relative min-h-[100dvh] grid bg-primary text-white [grid-template-columns:72px_1fr] md:[grid-template-columns:72px_var(--sidebar-width)_1fr]"
      style={layoutStyle}
    >
      {/* Sidebar A: icon rail */}
      <aside className="relative bg-black border-r border-border py-4 flex flex-col items-center">
        {/* <div className="absolute right-0 top-0 h-full w-px bg-gray-700/70" /> */}
        <div className="mb-4 mt-1">
          <Avatar rounded img={undefined} placeholderInitials="R" />
        </div>
        <Sidebar
          aria-label="Primary navigation"
          collapsed={true}
          collapseBehavior="collapse"
        >
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem
                href="/dashboard"
                icon={ChartPieSvg}
                active={pathname === "/dashboard"}
                label="Dashboard"
              ></SidebarItem>
              <SidebarItem
                href="/projects"
                icon={ClipboardSvg}
                active={pathname === "/projects"}
              >
                <span className="sr-only">Tasks</span>
              </SidebarItem>
              <SidebarItem
                href="/integrations"
                icon={FolderSvg}
                active={pathname === "/integrations"}
              >
                <span className="sr-only">Files</span>
              </SidebarItem>
              <SidebarItem
                href="/projects"
                icon={GridSvg}
                active={pathname === "/projects"}
              >
                <span className="sr-only">Grid</span>
              </SidebarItem>
              <SidebarItem
                href="/team"
                icon={UsersGroupSvg}
                active={pathname === "/team"}
              >
                <span className="sr-only">Team</span>
              </SidebarItem>
              <SidebarItem
                href="/settings"
                icon={EditBrushSvg}
                active={pathname === "/settings"}
              >
                <span className="sr-only">Settings</span>
              </SidebarItem>
              <SidebarItem
                href="/settings"
                icon={WandIconSvg}
                active={pathname === "/settings"}
              >
                <span className="sr-only">Settings</span>
              </SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
        <div className="mt-auto w-full flex flex-col items-center gap-4 pb-2">
          <Tooltip content="Account" placement="right">
            <UserIcon className="text-gray-400" />
          </Tooltip>
        </div>
      </aside>

      {/* Sidebar B: section navigation + list */}
      <aside
        className={`hidden md:flex h-full flex-col bg-black border-r border-border transition-all duration-300 ${
          isTeamSidebarOpen
            ? "w-[var(--sidebar-width)] opacity-100"
            : "w-0 opacity-0 pointer-events-none border-transparent"
        }`}
        aria-expanded={isTeamSidebarOpen}
        aria-hidden={!isTeamSidebarOpen}
      >
        {isTeamSidebarOpen ? (
          <div className="flex h-full flex-col">
            {isTeamRoute ? (
              <>
                <div className="p-6 pb-3">
                  <h2 className="text-xl font-semibold">Manage Team</h2>
                  <div className="mt-4">
                    <Button
                      as={Link}
                      to="/team/invite"
                      color="yellow"
                      className="text-black gap-1"
                    >
                      <UserAddIcon size={20} /> Invite
                    </Button>
                  </div>
                </div>
                <Sidebar className="max-w-56">
                  <SidebarItems>
                    <SidebarItemGroup>
                      <div className="px-6 pb-2 text-sm text-gray-400">
                        Team Members
                      </div>
                      {members.map((m) => (
                        <SidebarItem
                          key={m.email}
                          href="#"
                          className="!text-w1"
                        >
                          {m.name}
                        </SidebarItem>
                      ))}
                    </SidebarItemGroup>
                  </SidebarItems>
                </Sidebar>
              </>
            ) : (
              <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
                <h2 className="text-lg font-semibold text-w1">Coming Soon</h2>
                <p className="mt-2 text-sm text-text1">
                  Sidebar content for this section will be available soon.
                </p>
              </div>
            )}
            <div className="mt-auto p-6 pt-3 flex justify-start">
              <button
                type="button"
                onClick={handleTeamSidebarToggle}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-gray-400 transition hover:border-hover hover:text-white"
                aria-label="Collapse team sidebar"
              >
                <ChevronsLeftIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        ) : null}
      </aside>

      {!isTeamSidebarOpen ? (
        <div className="absolute bottom-4 left-20 z-10">
          <button
            type="button"
            onClick={handleTeamSidebarToggle}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-black/80 text-gray-400 backdrop-blur transition hover:border-hover hover:text-white"
            aria-label="Expand team sidebar"
          >
            <ChevronsLeftIcon className="h-5 w-5 rotate-180" />
          </button>
        </div>
      ) : null}

      {/* Main content */}
      <main className="p-4 md:p-6 lg:p-8 w-full">{children}</main>
    </div>
  );
}
