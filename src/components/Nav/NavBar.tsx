import Nav from "./Nav";
import ModeToggle from "../ModeToggle";
import { Code, Lightbulb, LightbulbOff } from "lucide-react";

export default function NavBar() {
  return (
    <>
      <div className="md:hidden">
        <Lightbulb className="block dark:hidden" />
        <LightbulbOff className="hidden dark:block" />
      </div>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 w-full items-center px-4">
            <div className="flex mt-1">
              <Code className="mr-2.5 mt-0.5" />
              <div className="text-xl">Depak Borhara</div>
            </div>
            <div className="ml-auto flex items-center space-x-4">
              <Nav />
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
