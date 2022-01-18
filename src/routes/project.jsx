import { useParams } from 'react-router-dom';
import { getProject } from '../data';
import '../App.css';

export default function Project() {
  let params = useParams();
  let project = getProject(parseInt(params.projectId, 10));
  return (
    <main className= "mainProjectView">
      <h2> Project Stat: {project.amount}</h2>
      <p>
        {project.name}: {project.number}
      </p>
      <p>Due Date: {project.due}</p>
    </main>
  );
}