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
        console.log(projectsData)
        setProjects(projectsData);
      },
    });
  }, [fetchProjects]);

  return (
    <div className="projects-page">
      <Navbar />
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
