export interface navMenuProps {
  icon: JSX.Element;
  title: string;
  href: string;
  description: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface ListItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
}

export type SkillName =
  | "React"
  | "Javascript"
  | "Typescript"
  | "Node"
  | "Express"
  | "Postgres"
  | "Git"
  | "Github"
  | "Lua"
  | "Npm"
  | "Bootstrap"
  | "Vercel"
  | "Ruby"
  | "RubyOnRails"
  | "Python"
  | "TailwindCSS";

export interface SkillProps {
  name: SkillName;
  url: string;
}

export interface RepoCardProps {
  name: string;
  language: string;
  url: string;
  description: string;
}

export interface SectionProps {
  header: string;
  children: React.ReactNode;
}

export interface IconProps {
  data: unknown;
  label: string;
  link?: string;
  loop?: boolean;
}

export interface BoxProps {
  title?: string;
  children: React.ReactNode;
}
