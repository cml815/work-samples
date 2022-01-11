import { Outlet, NavLink } from "react-router-dom";
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
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : ""
              };
            }}
            to={`/projects/${project.number}`}
            key={project.number}
          >
            {project.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}



