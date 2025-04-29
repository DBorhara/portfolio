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
