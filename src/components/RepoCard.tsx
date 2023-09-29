import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SiGithub } from "react-icons/si";
import { RepoCardProps } from "@/types";

const RepoCard: React.FC<RepoCardProps> = ({
  name,
  language,
  url,
  description,
}) => {
  const cleanURL = url.slice(8);
  return (
    <Card className="hover:bg-purple-200 dark:hover:bg-teal-600 w-80 border-2 border-purple-500 rounded-md text-center p-4 tracking-wide text-lg leading-5 mx-6 mb-12 transition duration-500">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="dark:text-white">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-center">
        <div>Language: {language}</div>
        <div className="text-xs pt-5 flex flex-col">
          <p>URL:</p> <p>{cleanURL}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center items-center">
        <Button
          onClick={() => window.open(url, "_blank")}
          className="text-xl inline-flex items-center justify-evenly w-2/5 mt-6 mx-3/100 mb-0 rounded-md bg-purple-700 text-gray-200 hover:bg-gray-200 hover:text-purple-700 h-8 cursor-pointer no-underline border-none"
        >
          <SiGithub /> <p className="text-sm pl-1">Github</p>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RepoCard;
