import React from 'react';
import './App.css';

import FlexRowButton from './components/parent/FlexRowButton.js'
import './components/parent/FlexRowButton.css'


const links = ['fantasy.ski', 'keydev.us', 'floatapp.net', 'bfostdev.com', 'bfostdev.net'];
const repos = ['algs-ds', 'langs', 'func', 'homelab', 'brriann.github.io'];

const baseUrl = 'https://github.com/brriann/'
const urlPrefix = 'http://'

const builtLinks = links.map(link => ({ href: urlPrefix + link, text: link }));
const builtRepos = repos.map(repo => ({ href: baseUrl + repo, text: repo }));

function App() {
  return (
    <div className="ezApp">
      <div className="ezAppContainer">
      <header className="ezAppHeader">
        <p>
          Welcome to brriann.github.io...
        </p>
        <p>
          This is a collection of ongoing projects. 
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
        My goal is to establish an easy React template for reuse on future projects.
        </p>
      </header>
      </div>
    </div>
  );
}

export default App;
