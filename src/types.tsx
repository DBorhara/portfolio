export interface navMenuProps {
  icon: JSX.Element;
  title: string;
  href: string;
  description: string;
}

export interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  children: React.ReactNode;
}

export type SkillName =
  | "NextJS"
  | "React"
  | "Javascript"
  | "Typescript"
  | "Go"
  | "Node"
  | "Express"
  | "Postgres"
  | "Git"
  | "Github"
  | "Npm"
  | "Figma"
  | "Bootstrap"
  | "Vercel"
  | "Ruby"
  | "RubyOnRails"
  | "TailwindCSS";

export interface SkillProps {
  skill: SkillName;
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
  data: any;
  label: string;
  link?: string;
  loop?: boolean;
}

export interface BoxProps {
  title?: string;
  children: React.ReactNode;
}
