import type { Route } from "./+types/team";
import {
  Button,
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
  TableRow,
  TableCell,
  TextInput,
  Avatar,
  Tooltip,
} from "flowbite-react";
import DashboardLayout from "../components/DashboardLayout";
import type { FC, SVGProps } from "react";
import { UserAddIcon, PenIcon, SearchIcon } from "~/icons";

type Member = {
  name: string;
  email: string;
  role: string;
  description: string;
  color?: string;
};

const SearchIconSvg: FC<SVGProps<SVGSVGElement>> = (props) => (
  <SearchIcon {...props} />
);

const members: Member[] = [
  {
    name: "Rakesh Soni",
    email: "rakesh@email.com",
    role: "Administrator",
    description: "Full access to features and settings",
  },
  {
    name: "Vardham Jain",
    email: "vardham@email.com",
    role: "Content Creator",
    description: "Full access to features and settings",
  },
  {
    name: "Irya Patni",
    email: "irya@email.com",
    role: "Editor",
    description: "Full access to features and settings",
  },
  {
    name: "Tattvarth Shah",
    email: "tattvarth@email.com",
    role: "Viewer",
    description: "Full access to features and settings",
  },
  {
    name: "Henry Robert",
    email: "henry@email.com",
    role: "Project Manager",
    description: "Full access to features and settings",
  },
  {
    name: "Joyelle Harris",
    email: "joyelle@email.com",
    role: "Editor",
    description: "Full access to features and settings",
  },
  {
    name: "Auton Thomas",
    email: "auton@email.com",
    role: "Editor",
    description: "Full access to features and settings",
  },
  {
    name: "Arghya Kumar",
    email: "arghya@email.com",
    role: "Editor",
    description: "Full access to features and settings",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Manage Team" },
    { name: "description", content: "Manage roles for your team members" },
  ];
}

export default function TeamPage() {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-semibold">Manage Team</h1>
        <p className="text-gray-400">Manage roles for your team members</p>
      </div>

      <div className="flex items-center justify-between my-6">
        <div className="max-w-xl">
          <TextInput
            id="search"
            type="text"
            placeholder="Search Team Member"
            icon={SearchIconSvg}
            color="success"
            shadow
            className="min-w-96"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button outline>Cancel</Button>
          <Button color="yellow" className="text-black gap-1">
            <UserAddIcon size={20} /> Invite Member
          </Button>
        </div>
      </div>

      <div className="rounded-xl border border-border overflow-hidden">
        <Table hoverable className="bg-primary">
          <TableHead className="bg-secondary">
            <TableHeadCell>Team Member</TableHeadCell>
            <TableHeadCell>Position</TableHeadCell>
            <TableHeadCell>Description</TableHeadCell>
            <TableHeadCell>
              <span className="sr-only">Edit</span>
            </TableHeadCell>
          </TableHead>
          <TableBody className="divide-y divide-border">
            {members.map((m) => (
              <TableRow key={m.email} className="bg-primary hover:bg-primary">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar
                      rounded
                      size="sm"
                      placeholderInitials={m.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    />
                    <div>
                      <div className="font-medium text-w1 leading-tight">
                        {m.name}
                      </div>
                      <div className="text-sm text-text1">{m.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-w1">{m.role}</TableCell>
                <TableCell>{m.description}</TableCell>
                <TableCell className="text-right">
                  <Button color="none">
                    <PenIcon className="hover:text-white" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </DashboardLayout>
  );
}
