import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/ThemeProvider";
import { BsSun as Sun, BsMoon as Moon } from "react-icons/bs";
import { Lightbulb, LightbulbOff } from "lucide-react";

const ModeToggle: React.FC = () => {
  const { setTheme, theme } = useTheme();
  console.log("theme", theme);

  return (
    <div>
      <div className="hidden md:flex">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="md:hidden">
        {theme === "light" ? (
          <Lightbulb onClick={() => setTheme("dark")} />
        ) : (
          <LightbulbOff onClick={() => setTheme("light")} />
        )}
      </div>
    </div>
  );
};

export default ModeToggle;
