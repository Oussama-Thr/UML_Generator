import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the UML Diagram Tool</h1>
      <Link to="/editor">
        <button>Open UML Editor</button>
      </Link>
    </div>
  );
}
