import { useParams } from 'react-router-dom';
import { getProject } from '../data';
import '../App.css';

export default function Project() {
  let params = useParams();
  let project = getProject(parseInt(params.projectId, 10));
  return (
    <main className= "projectContainer">
      <h2>{project.name}</h2>
      <p>{project.due}</p>
      <p>{project.category}
      </p>
    </main>
  );
}