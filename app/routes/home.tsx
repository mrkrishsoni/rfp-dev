import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Button } from "flowbite-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Welcome />
      <div className="flex items-center justify-center py-8">
        <Button color="blue">Flowbite Button</Button>
      </div>
    </>
  );
}
