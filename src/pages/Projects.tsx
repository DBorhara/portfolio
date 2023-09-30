import React, { useEffect, useState } from "react";
import { Octokit } from "octokit";
import RepoCard from "@/components/RepoCard";
import Loading from "./Loading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { BsBrowserChrome } from "react-icons/bs";

const Projects: React.FC = () => {
  const [starredRepos, setStarredRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const octokit = new Octokit({ auth: import.meta.env.VITE_GITHUB_TOKEN });
  const getAllStarredRepos = async () => {
    try {
      const ghrepos = await octokit.request("GET /users/DBorhara/starred", {});
      setStarredRepos(ghrepos.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllStarredRepos();
  }, []);

  if (isLoading) return <Loading />;
  return (
    <div>
      <h1 className="text-center mt-10 leading-normal tracking-wider text-5xl">
        My <b className="text-purple-500">Projects</b>
      </h1>
      <div className="flex flex-wrap justify-center mx-auto my-6 px-5%">
        <Card className="hover:bg-purple-200 dark:hover:bg-teal-600 w-80 border-2 border-purple-500 rounded-md text-center p-4 tracking-wide text-lg leading-5 mx-6 mb-12 transition duration-500">
          <CardHeader>
            <CardTitle>Odin HR Dashboard</CardTitle>
            <CardDescription className="dark:text-white">
              HR Dashboard built with Vite in React, Typescript, Recharts, and
              TailwindCSS
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col justify-center items-center">
            <div>Language: Typescript</div>
            <div className="text-xs pt-5 flex flex-col">
              <p>URL:</p> <p>https://odin-s74p.onrender.com</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center items-center">
            <Button
              onClick={() =>
                window.open("https://odin-s74p.onrender.com", "_blank")
              }
              className="text-xl inline-flex items-center justify-evenly w-2/5 mt-6 mx-3/100 mb-0 rounded-md bg-purple-700 text-gray-200 hover:bg-gray-200 hover:text-purple-700 h-8 cursor-pointer no-underline border-none"
            >
              <BsBrowserChrome /> <p className="text-sm pl-1">Demo</p>
            </Button>
          </CardFooter>
        </Card>
        {starredRepos.map(({ name, language, description, html_url }) => (
          <RepoCard
            key={name}
            name={name}
            language={language}
            description={description}
            url={html_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
