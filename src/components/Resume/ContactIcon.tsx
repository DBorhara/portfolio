import React from "react";
import Lottie from "lottie-react";
import { IconProps } from "@/types";

const ContactIcon: React.FC<IconProps> = ({ data, label, link, loop }) => (
  <div className="flex flex-col items-center text-center m-2">
    {link ? (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Lottie  animationData={data} loop={loop} className="h-16 w-16 mb-2" />
      </a>
    ) : (
      <Lottie animationData={data} className="h-16 w-16 mb-2" />
    )}
    <span>{label}</span>
  </div>
);

export default ContactIcon;
