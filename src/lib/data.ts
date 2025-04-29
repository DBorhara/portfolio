import { NavItem, SkillProps } from "@/types";

export const skillsArr: SkillProps[] = [
  { name: "Typescript", url: "https://www.typescriptlang.org/" },
  {
    name: "Javascript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { name: "React", url: "https://react.dev/" },
  { name: "Node", url: "https://nodejs.org/en" },
  { name: "Express", url: "https://expressjs.com/" },
  { name: "Npm", url: "https://www.npmjs.com/" },
  { name: "Ruby", url: "https://www.ruby-lang.org/en/" },
  { name: "RubyOnRails", url: "https://rubyonrails.org/" },
  { name: "Python", url: "https://www.python.org/" },
  { name: "Lua", url: "https://www.lua.org/" },
  { name: "Git", url: "https://git-scm.com/" },
  { name: "Github", url: "https://github.com/DBorhara" },
  { name: "Vercel", url: "https://vercel.com/" },
  { name: "TailwindCSS", url: "https://tailwindcss.com/" },
  { name: "Bootstrap", url: "https://getbootstrap.com/" },
];

export const routes: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Resume", path: "/resume" },
  { label: "Contact", path: "/contact" },
];
