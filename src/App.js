import logo from './logo.svg';
import { Outlet } from 'react-router-dom';
// import { SideNav } from './components/sideNav'
import './App.css';

function App() {
  return (
    <>
    <div>
      <h1>Portfolio</h1>
      <Outlet />
    </div> 
    </>
  );
}

export default App;
