import React from "react";
import Skills from "@/components/Skills";
import Lottie from "lottie-react";
import Coder2 from "../LottieFiles/coder2.json";
import { SkillName } from "@/types";

const About: React.FC = () => {
  const skillsArr = [
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
  return (
    <>
      <div className="flex justify-evenly min-h-[80vh] items-center p-6">
        <div className="w-1/2 font-medium text-lg leading-7 tracking-wider">
          <h1 className="text-3xl font-semibold pb-10">
            Get to <b className=" text-purple-500">know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Depak Borhara</b> and I am from NYC/NJ. I'm a{" "}
            <b>Full stack web developer</b> with 3 years of experience. <br />
            <br />
            TO BE DONE
            <br />
          </p>
        </div>

        <div className="bg-purple-200 rounded-full">
          <Lottie
            className="w-96 h-96 pt-28"
            animationData={Coder2}
            loop={true}
          />
        </div>
      </div>

      <h1 className="text-center my-12 mx-2.5 text-5xl tracking-wider">
        Professional Skillset
      </h1>
      <div className="flex flex-wrap justify-center my-4 mx-10%">
        {skillsArr.map((skill) => (
          <Skills
            key={skill.name}
            skill={skill.name as SkillName}
            url={skill.url}
          />
        ))}
      </div>
    </>
  );
};

export default About;
