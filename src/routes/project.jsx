import { useParams } from 'react-router-dom';

export default function Project() {
  let params = useParams();
  return <h2>Project: {params.projectId}</h2>
}