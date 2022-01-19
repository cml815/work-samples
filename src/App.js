import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './global.css';
import Projects from './routes/projects';
import Project from './routes/project'
import About from './routes/about';
import Home from './routes/home';
// import sideNav from './components/sideNav';
import './components/Button.jsx'
import './components/Button.css'
import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/projects" element={<Projects />}>
            <Route 
              index
              element={
                <main className="directoryContainer">
                  <p>Select a project</p>
                </main>
              }
            />
            <Route path="/:id" element={<Project />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "0rem" }}>
            <p>There's nothing here!</p>
        </main>
          }
        />
      </Routes>
);
}