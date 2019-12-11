import React from 'react';
import './App.css';
import { Organization } from './components/Organization';
import { Repositories } from './components/Repositories';
import { RepoDetails } from './components/RepoDetails';

function App() {

  const [ companyName , setCompanyName ] = React.useState("Futurice");
  
  const inputHandler = (e) => {
    if(e.key === "Enter") {
      setCompanyName(e.target.value);
    }
  }

  return (
    <div className="App">
      <h2 className="appTitle">Dashboard Futurice</h2>
      <input className={"inputBox"} defaultValue={companyName} onKeyPress={inputHandler}></input>
      <Organization companyName={companyName}/>
      <div className="repoDetails">
        <Repositories companyName={companyName}/>
        <RepoDetails companyName={companyName}/>
      </div>
    </div>
  );
}

export default App;
