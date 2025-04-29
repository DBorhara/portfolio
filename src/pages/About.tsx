import React from "react";
import Lottie from "lottie-react";
import Coder2 from "../LottieFiles/coder2.json";
import Skills from "@/components/Skills";
import { skillsArr } from "@/lib/data";
import { SkillName } from "@/types";

const About: React.FC = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-evenly min-h-[80vh] items-center p-6">
        <div className="md:w-1/2 font-medium text-lg leading-7 tracking-wider pb-10 md:pb-0 ">
          <h1 className="text-3xl font-semibold pb-10">
            Get to <b className=" text-purple-500">know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Depak Borhara</b>, and I'm from the NYC/NJ area.
            I'm a <b>Software Engineer</b> with 3 years of professional
            experience, passionate about turning ideas into tangible, impactful
            products. I love the process of iteration, continuous learning, and
            getting better with each project. I genuinely enjoy collaborating
            with others — both learning from my peers and helping others grow —
            and I have a strong passion for building efficient tools that save
            time, streamline processes, and reduce costs.
            <br />
            <br />
            Currently, I'm further deepening my technical foundation by pursuing
            a degree in Computer Science at Rutgers University, with a minor in
            Mathematics. This return to formal education reflects my commitment
            to expanding my skills, tackling more complex problems, and building
            a long-term career in tech.
            <br />
            <br />
            Outside of work and school, I'm a proud husband and father to three
            little girls. Every day, I strive to show them that with hard work,
            creativity, and a little bit of luck, you can achieve happiness and
            success.
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
