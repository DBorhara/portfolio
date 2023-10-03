import React from "react";
import { useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ListItemProps } from "@/types";
import { routes } from "@/lib/data";
import { GiHamburgerMenu } from "react-icons/gi";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "../ui/sheet";

const Nav: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-6 flex">
      <div className={"hidden md:flex"}>
        <NavigationMenu>
          <NavigationMenuList>
            {routes.map((route) => (
              <NavigationMenuItem key={route.path}>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "cursor-pointer")}
                  onClick={() => {
                    navigate(route.path);
                  }}
                >
                  {route.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <Sheet>
        <SheetTrigger>
          <div className="md:hidden">
            <GiHamburgerMenu />
            <div className="hamburger-icon"></div>
          </div>
        </SheetTrigger>
        <SheetContent className={cn("w-1/3")}>
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col pt-10">
              {routes.map((route) => (
                <SheetClose key={route.label}>
                  <NavigationMenuItem key={route.path}>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "cursor-pointer"
                      )}
                      onClick={() => {
                        navigate(route.path);
                      }}
                    >
                      {route.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </SheetClose>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Nav;

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
