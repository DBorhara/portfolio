import { NavItem, SkillProps } from "@/types";

export const skillsArr: SkillProps[] = [
  { name: "Typescript", url: "https://www.typescriptlang.org/" },
  {
    name: "Javascript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { name: "Go", url: "https://go.dev/" },
  { name: "Ruby", url: "https://www.ruby-lang.org/en/" },
  { name: "React", url: "https://react.dev/" },
  { name: "NextJS", url: "https://nextjs.org/" },
  { name: "TailwindCSS", url: "https://tailwindcss.com/" },
  { name: "Node", url: "https://nodejs.org/en" },
  { name: "Express", url: "https://expressjs.com/" },
  { name: "RubyOnRails", url: "https://rubyonrails.org/" },
  { name: "Git", url: "https://git-scm.com/" },
  { name: "Github", url: "https://github.com/DBorhara" },
  { name: "Figma", url: "https://www.figma.com/" },
  { name: "Vercel", url: "https://vercel.com/" },
  { name: "Npm", url: "https://www.npmjs.com/" },
  { name: "Bootstrap", url: "https://getbootstrap.com/" },
];

export const routes: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Resume", path: "/resume" },
  { label: "Contact", path: "/contact" },
];