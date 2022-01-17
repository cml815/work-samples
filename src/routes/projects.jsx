import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import '../App.css';
import { getProjects } from "../data";

export default function Projects() {
  let projects = getProjects();
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div style={{ display: "flex" }}>
      <nav className="navTest">
        <input
          value={searchParams.get("filter") || ""}
          onChange={event => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
          />
        {projects
          .filter(project => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = project.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
        .map(project => (
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



