import GetAllProjects from "./components/GetAllProjects";

export default function TanStackMain() {
  return (
    <div>
      {/* Get all Projects without caching */}
      <GetAllProjects />
    </div>
  );
}
