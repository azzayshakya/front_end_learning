import "@/App.css";
import useFetchProjectsWithCache from "../hooks/useFetchProjectsWithCache";
import Navbar from "@/components/Navbar";

const GetAllProjectsWithCaching = () => {
  const {
    data: projects,
    isLoading,
    isError,
    error,
  } = useFetchProjectsWithCache();

  return (
    <div className="projects-page">
      <Navbar />

      <h1 className="bg-muted-foreground rounded-lg flex items-center justify-center p-3 mx-10 my-3">Get All Projects With Caching</h1>
      {isLoading ? (
        <p>Loading projects...</p>
      ) : isError ? (
        <p className="text-red-600">Error: {error.message}</p>
      ) : projects?.length === 0 ? (
        <p>No projects available.</p>
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

export default GetAllProjectsWithCaching;
