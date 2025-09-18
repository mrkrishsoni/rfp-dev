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
  Modal,
  ModalBody,
  Label,
  Select,
} from "flowbite-react";
import DashboardLayout from "../components/DashboardLayout";
import {
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
  type FC,
  type SVGProps,
} from "react";
import {
  UserAddIcon,
  PenIcon,
  SearchIcon,
  CloseIcon,
  UsersGroupIcon,
  MailIcon,
} from "~/icons";

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
const MailIconSvg: FC<SVGProps<SVGSVGElement>> = (props) => (
  <MailIcon {...props} />
);
const UsersGroupIconSvg: FC<SVGProps<SVGSVGElement>> = (props) => (
  <UsersGroupIcon {...props} />
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

const roleOptions = [
  {
    value: "administrator",
    label: "Administrator",
    description: "Full access to all features and settings.",
  },
  {
    value: "ui-ux-designer",
    label: "UI/UX Designer",
    description: "Full access to all features and settings.",
  },
  {
    value: "project-manager",
    label: "Project Manager",
    description: "Full access to all features and settings.",
  },
  {
    value: "content-writer",
    label: "Content Writer",
    description: "Full access to all features and settings.",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Manage Team" },
    { name: "description", content: "Manage roles for your team members" },
  ];
}

export default function TeamPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isInviteModalOpen, setInviteModalOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("");

  const filteredMembers = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) {
      return members;
    }

    return members.filter(({ name, email }) => {
      const nameMatch = name.toLowerCase().includes(query);
      const emailMatch = email.toLowerCase().includes(query);
      return nameMatch || emailMatch;
    });
  }, [searchTerm]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchReset = () => {
    setSearchTerm("");
  };

  const handleInviteOpen = () => {
    setInviteModalOpen(true);
  };

  const handleInviteClose = () => {
    setInviteModalOpen(false);
    setInviteEmail("");
    setInviteRole("");
  };

  const handleInviteSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inviteEmail.trim() || !inviteRole) {
      return;
    }
    handleInviteClose();
  };

  const handleInviteEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInviteEmail(event.target.value);
  };

  const handleInviteRoleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setInviteRole(event.target.value);
  };

  const isInviteFormValid = inviteEmail.trim() !== "" && inviteRole !== "";

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-semibold">Manage Team</h1>
        <p className="text-gray-400">Manage roles for your team members</p>
      </div>

      <div className="flex flex-col gap-4 my-6 md:flex-row md:items-center md:justify-between">
        <div className="w-full md:max-w-xl">
          <TextInput
            id="search"
            type="text"
            placeholder="Search Team Member"
            icon={SearchIconSvg}
            shadow
            className="w-full"
            value={searchTerm}
            onChange={handleSearchChange}
            aria-label="Search team members by name or email"
          />
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center md:justify-end">
          <Button
            outline
            type="button"
            className="gap-1 w-full sm:w-auto"
            onClick={handleSearchReset}
            disabled={!searchTerm.trim()}
          >
            <CloseIcon size={16} />
            Clear
          </Button>
          <Button
            color="yellow"
            className="text-black gap-1 w-full sm:w-auto"
            onClick={handleInviteOpen}
            type="button"
          >
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
            {filteredMembers.length > 0 ? (
              filteredMembers.map((m) => (
                <TableRow
                  key={m.email}
                  className="bg-primary hover:bg-primary"
                  data-testid="team-row"
                >
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
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="py-10 text-center text-text1">
                  No team members match your search.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <Modal
        show={isInviteModalOpen}
        size="lg"
        popup
        onClose={handleInviteClose}
        dismissible
      >
        <ModalBody>
          <form className="space-y-6" onSubmit={handleInviteSubmit}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  Invite Team Members
                </h2>
                <p className="mt-1 text-sm text-text1">
                  Enter email addresses to invite new members.
                </p>
              </div>
              <button
                type="button"
                onClick={handleInviteClose}
                className="text-text1 transition hover:text-white"
                aria-label="Close invite modal"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="invite-email">Email Address</Label>
                <TextInput
                  id="invite-email"
                  type="email"
                  placeholder="member@emailid.com"
                  icon={MailIconSvg}
                  value={inviteEmail}
                  onChange={handleInviteEmailChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="invite-role">Role</Label>
                <Select
                  id="invite-role"
                  value={inviteRole}
                  onChange={handleInviteRoleChange}
                  icon={UsersGroupIconSvg}
                  required
                  aria-placeholder="Select a role"
                >
                  <option value="" disabled>
                    Select a role
                  </option>
                  {roleOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {`${option.label}\n${option.description}`}
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button
                type="button"
                outline
                onClick={handleInviteClose}
                className="px-6"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                color="yellow"
                className="px-6 text-black"
                disabled={!isInviteFormValid}
              >
                Send invitation
              </Button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </DashboardLayout>
  );
}
