import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <h1>Portfolio</h1>
      <nav
        style={{
          borderBottom: "sold 1px",
          paddingBottom: "1rem"
        }}
        >
          <Link to="/projects">Projects</Link> | {" "}
          <Link to="/about">About</Link>
      </nav>
    </div> 
  );
}

export default App;
