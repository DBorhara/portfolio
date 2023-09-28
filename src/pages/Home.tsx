import React from "react";
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Avatar from "../assets/Avatar.png";
import Typed from "@/components/Typed";
import Tilt from "react-parallax-tilt";
import { SiVim } from "react-icons/si";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-5/12 flex justify-center items-center">
        <Lottie className="w-96 h-96" animationData={SpaceBoy} loop={true} />
      </div>
      <div className="HomeText">
        <h1 className="font-semibold text-3xl tracking-wider pt-2.5">
          Hi There!
        </h1>
        <h1 className="font-semibold text-3xl tracking-wider pt-2.5">
          I'M <b className=" text-purple-500">DEPAK BORHARA</b>
        </h1>
        <Typed />
      </div>
      <div className="flex justify-evenly min-h-[80vh] mt-14 items-center p-6">
        <div className="w-1/2 font-medium text-lg leading-7 tracking-wider">
          <h1 className="text-[35px] font-semibold pb-10">
            Brief <b className=" text-purple-500">introduction</b>
          </h1>
          <div>
            I love learning and challenging myself to grow. I like to take
            practical ideas and turning them into reality with code. I
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
          <img className="w-72" src={Avatar} alt="Avatar" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
