import React from 'react';
import './App.css';

import FlexRowButton from './components/parent/FlexRowButton.js'
import './components/parent/FlexRowButton.css'

const workRepos = ['dotnet', 'tsql', 'apidev', 'aws', 'automation', 'docker', 'react'];
const links = ['fantasy.ski', 'keydev.us', 'floatapp.net', 'bfostdev.com', 'bfostdev.net'];
const repos = ['algs-ds', 'comparch', 'langs', 'func', 'windows', 'linux', 'brriann.github.io'];

const baseUrl = 'https://github.com/brriann/'
const urlPrefix = 'https://'

const builtLinks = links.map(link => ({ href: urlPrefix + link, text: link }));
const builtRepos = repos.map(repo => ({ href: baseUrl + repo, text: repo }));
const builtWorkRepos = workRepos.map(workRepo => ({
  href: baseUrl + workRepo, text: workRepo
}));

function App() {
  return (
    <div className="ezApp">
      <div className="ezAppContainer">
      <header className="ezAppHeader">
        <p>
          Welcome to brriann.github.io...
        </p>
        <p>
          This is a collection of projects, coursework, and reference material.
        </p>
        <p>2020 full-time work:</p>
        <p>
          <FlexRowButton
            children={builtWorkRepos}
          />
        </p>
        <p>View in a repository:</p>
        <p>
          <FlexRowButton
            children={builtRepos}
          />
        </p>
        <p>Or visit in a browser:</p>
        <p>
        <FlexRowButton
            children={builtLinks}
          />
        </p>
        <p>
          brriann.github.io is a simple React app.
        </p>
        <p>
          My goal is to make a React template that's easy to reuse.
        </p>
      </header>
      </div>
    </div>
  );
}

export default App;
