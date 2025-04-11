import GetAllProjects from "./components/GetAllProjects";
import GetAllProjectsWithCaching from "./components/GetAllProjectsWithCaching";

export default function TanStackMain() {
  return (
    <div>
      {/* Get all Projects with caching */}
      <GetAllProjectsWithCaching />

      {/* Get all Projects without caching */}
      <GetAllProjects />
    </div>
  );
}
