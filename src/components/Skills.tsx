import React from "react";
import { Link } from "react-router-dom";
import {
  SiBootstrap,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiGo,
  SiJavascript,
  SiNextdotjs,
  SiNpm,
  SiPostgresql,
  SiReact,
  SiRuby,
  SiRubyonrails,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SkillProps } from "../types";

const Skills: React.FC<SkillProps> = ({ name, url }) => {
  const icon = {
    NextJS: <SiNextdotjs />,
    React: <SiReact />,
    RubyOnRails: <SiRubyonrails />,
    Javascript: <SiJavascript />,
    Typescript: <SiTypescript />,
    Go: <SiGo />,
    Ruby: <SiRuby />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    Postgres: <SiPostgresql />,
    Git: <SiGit />,
    Github: <SiGithub />,
    TailwindCSS: <SiTailwindcss />,
    Npm: <SiNpm />,
    Figma: <SiFigma />,
    Bootstrap: <SiBootstrap />,
    Vercel: <SiVercel />,
  };

  return (
    <div
      title={name}
      className="w-[max(15%,150px)] h-[150px] flex items-center justify-center m-x-6 my-6 border-[3px] border-gray-300 dark:border-[#431f47] text-7xl rounded-md transition-transform duration-500 hover:scale-120 hover:shadow-md hover:shadow-[#431f47] hover:bg-purple-200 dark:hover:bg-amber-500"
    >
      <Link to={url}>{icon[name]}</Link>
    </div>
  );
};

export default Skills;
