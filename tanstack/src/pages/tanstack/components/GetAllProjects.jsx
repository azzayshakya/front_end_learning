import { useState, useEffect } from "react";
import "@/App.css";
import useFetchProjects from "../hooks/useFetchProjects";
import Navbar from "@/components/Navbar";

const GetAllProjects = () => {
  const [projects, setProjects] = useState([]);

  const { fetchProjects, isFetching } = useFetchProjects();

  useEffect(() => {
    fetchProjects(undefined, {
      onSuccess: (projectsData) => {
        console.log(projectsData);
        setProjects(projectsData);
      },
    });
  }, [fetchProjects]);

  return (
    <div className="projects-page">
      <Navbar />

      <h1 className="mx-10 my-3 flex items-center justify-center rounded-lg bg-muted-foreground p-3">
        Get All Projects Without Caching
      </h1>

      {isFetching ? (
        <p>Loading projects...</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project._id}>{project.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GetAllProjects;
