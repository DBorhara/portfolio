import React from "react";
import { Mail } from "lucide-react";
import { DiGithub } from "react-icons/di";
import { SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="w-9/10 h-10 mx-auto mt-20 tracking-wider flex flex-wrap items-center justify-evenly relative bottom-0 text-center">
      <h4 className="mx-6 font-medium">
        Developed by <b className="text-purple-600">Depak Borhara</b>
      </h4>
      <h4 className="mx-6 font-medium">
        Copyright <b className="text-purple-600">&copy; 2023</b> DB
      </h4>
      <div className="flex w-44 text-lg justify-evenly items-center">
        <Link
          to="https://github.com/DBorhara"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-current"
        >
          <DiGithub />
        </Link>
        <Link
          to="https://www.linkedin.com/in/depakborhara/"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-current"
        >
          <SiLinkedin />
        </Link>
        <Link
          to="mailTo:depakborhara@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-current"
        >
          <Mail className="text-purple-600" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
