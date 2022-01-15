import React from 'react';
import { Link } from 'react-router-dom';
import "./side-nav.module.css";

export function SideNav() {
  return (
    <nav className="menu">
        <Link to="/projects">Projects</Link> | {" "}
        <Link to="/about">About</Link>
    </nav>
  );
}
