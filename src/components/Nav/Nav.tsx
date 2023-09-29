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

const Nav: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-6 flex">
      <NavigationMenu>
        <NavigationMenuList>
          {routes.map((route) => (
            <NavigationMenuItem key={route.path}>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "cursor-pointer")}
                onClick={() => navigate(route.path)}
              >
                {route.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
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
