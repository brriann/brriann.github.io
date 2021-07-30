import React from 'react';
import './App.css';

import FlexRowButton from './components/parent/FlexRowButton.js'
import './components/parent/FlexRowButton.css'

import {
  workRepos, 
  infraRepos, 
  links, 
  classRepos, 
  projRepos
} from './data.js';



const baseUrl = 'https://github.com/brriann/'
const urlPrefix = 'https://'

let repoBuilder = repo => ({
  href: baseUrl + repo.name, 
  text: repo.name, 
  highlight: repo.highlight
});

let linkBuilder = link => ({
  href: urlPrefix + link.name,
  text: link.name,
  highlight: link.highlight
});

const builtWorkRepos = workRepos.map(repoBuilder);

const builtInfraRepos = infraRepos.map(repoBuilder);

const builtLinks = links.map(linkBuilder);

const builtClassRepos = classRepos.map(repoBuilder);

const builtProjRepos = projRepos.map(repoBuilder);


function App() {
  return (
    <div className="ezApp">
      <div className="ezAppContainer">
      <header className="ezAppHeader">
        <p>2020 full-time reference material:</p>
        <p>
          <FlexRowButton
            children={builtWorkRepos}
          />
        </p>
        <p>
          <FlexRowButton
            children={builtInfraRepos}
          />
        </p>
        <p>CS and math classwork:</p>
        <p>
          <FlexRowButton
            children={builtClassRepos}
          />
        </p>
        <p>Template projects:</p>
        <p>
          <FlexRowButton
            children={builtProjRepos}
          />
        </p>
        <p>Live domains and resources:</p>
        <p>
        <FlexRowButton
            children={builtLinks}
          />
        </p>
      </header>
      </div>
    </div>
  );
}

export default App;
