import React from 'react';
import './App.css';
import { Organization } from './components/Organization';
import { Repositories } from './components/Repositories';
import { RepoDetails } from './components/RepoDetails';

function App() {
  return (
    <div className="App">
      <h2 className="appTitle">Dashboard Futurice</h2>
      <Organization/>
      <div className="repoDetails">
        <Repositories/>
        <RepoDetails/>
      </div>
    </div>
  );
}

export default App;
