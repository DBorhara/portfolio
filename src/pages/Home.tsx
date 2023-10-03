import React from "react";
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import { SiVim } from "react-icons/si";
import Tilt from "react-parallax-tilt";
import Typed from "@/components/Typed";
import Avatar from "../assets/Avatar.png";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-10/12 flex justify-center items-center">
        <Lottie
          className="md:w-96 md:h-96 h-9/12"
          animationData={SpaceBoy}
          loop={true}
        />
      </div>
      <div className="HomeText">
        <h1 className="font-semibold md:text-3xl text-5xl tracking-wider py-2.5">
          Hi There!
        </h1>
        <h1 className="font-semibold text-3xl tracking-wider pt-2.5">
          I'M <b className="text-purple-500">DEPAK BORHARA</b>
        </h1>
        <Typed />
      </div>
      <div className="flex md:flex-row flex-col justify-evenly lg:min-h-[80vh] mt-14 items-center p-6">
        <div className="md:w-1/2 font-medium text-lg leading-7 tracking-wider mb-10 md:mb-0">
          <h1 className="text-[35px] flex justify-center items-center font-semibold pb-10">
            Brief <b className="text-purple-500 ml-2.5">introduction</b>
          </h1>
          <div>
            <span>
              I love learning and challenging myself to grow. I like to take
              practical ideas and turning them into reality with code. I also
              enjoy colors and design, but engineering is my first love.
            </span>
            <br />
            <br />I am fluent in <b>Javascript</b> and <b>Typescript</b>,
            proficient in <b>Go</b>, and I am working on getting a new role
            where I can utilize these languges.
            <br />
            <br />I plan to learn <b>Rust</b>, and <b>Zig</b> in the near
            future. <br />
            <br />
            <div className="flex justify-center items-center">
              <div>Also, I love coding in</div>
              <div className="ml-4">
                <SiVim style={{ scale: "2.0" }} />
              </div>
            </div>
          </div>
        </div>
        <Tilt>
          <img
            className="w-72 shadow-2xl dark:bg-white rounded-full"
            src={Avatar}
            alt="Avatar"
          />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
