import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Projects from './routes/projects';
import Project from './routes/project'
import About from './routes/about';
// import sideNav from './components/sideNav';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element= {<App />} />
        <Route path="projects" element={<Projects />}>
            <Route 
              index
              element={
                <main style={{ padding: "0"}}>
                  <p>Select a project</p>
                </main>
              }
            />
            <Route path=":projectId" element={<Project />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "0rem" }}>
            <p>There's nothing here!</p>
        </main>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
