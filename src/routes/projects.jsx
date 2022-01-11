import { Link } from "react-router-dom";
import { getProjects } from "../data";

export default function Projects() {
  let projects = getProjects();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      >
        {projects.map(project => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/projects/${project.number}`}
            key={project.number}
          >
            {project.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}



