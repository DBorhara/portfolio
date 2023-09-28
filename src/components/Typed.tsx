import React from "react";
import Typewriter from "typewriter-effect";

const Typed: React.FC = () => {
  return (
    <div className="">
      <Typewriter
        options={{
          strings: ["Software Engineer", "Teacher", "Tinkerer"],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
};

export default Typed;
