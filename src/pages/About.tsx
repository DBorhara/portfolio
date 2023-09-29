import React from "react";
import Lottie from "lottie-react";
import Coder2 from "../LottieFiles/coder2.json";
import Skills from "@/components/Skills";
import { skillsArr } from "@/lib/data";
import { SkillName } from "@/types";

const About: React.FC = () => {
  return (
    <>
      <div className="flex justify-evenly min-h-[80vh] items-center p-6">
        <div className="w-1/2 font-medium text-lg leading-7 tracking-wider">
          <h1 className="text-3xl font-semibold pb-10">
            Get to <b className=" text-purple-500">know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Depak Borhara</b> and I am from NYC/NJ. I'm a{" "}
            <b>Full stack web developer</b> with 3 years of experience.
            <br />
            <br />
            I love turning ideas into tangible products, and enjoy the process
            of iteration, learning and getting better each time. I also enjoy
            working with other people, and both learning and teaching. Lastly, I
            have a strong passion for efficiency and making tools that help save
            time and money.
            <br />
            <br />
            In my personal life, I am a husband and father to 2 little girls! I
            try my best each day to show them hard-work, creativity, and a
            little bit luck is all you need to be happy.
            <br />
          </p>
        </div>

        <div>
          <Lottie
            className="w-96 h-96 pt-28 transition delay-150 bg-gradient-to-b from-purple-500 to-amber-500  rounded-full"
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
            name={skill.name as SkillName}
            url={skill.url}
          />
        ))}
      </div>
    </>
  );
};

export default About;
