import Nav from "./Nav";
import ModeToggle from "../ModeToggle";
import { Code } from "lucide-react";

export default function NavBar() {
  return (
    <>
      <div className="flex-col flex">
        <div className="border-b">
          <div className="flex h-16 w-full items-center px-4">
            <div className="flex mt-1">
              <Code className="mr-2.5 mt-0.5" />
              <div className="text-xl">Depak Borhara</div>
            </div>
            <div className="hidden ml-auto md:flex items-center space-x-4">
              <Nav />
              <ModeToggle />
            </div>
            <div className="md:hidden ml-auto flex items-center space-x-8">
              <ModeToggle />
              <Nav />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
