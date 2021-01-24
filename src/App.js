import React from 'react';
import './App.css';

import FlexRowButton from './components/parent/FlexRowButton.js'
import './components/parent/FlexRowButton.css'

const workRepos = [
  {'name': 'dotnet', 'highlight': true},
  {'name': 'tsql', 'highlight': true},
  {'name': 'nodejs', 'highlight': true},
  {'name': 'python', 'highlight': false},
  {'name': 'mongo', 'highlight': false},
  {'name': 'react', 'highlight': true}
];

const infraRepos = [
  {'name': 'aws', 'highlight': true},
  {'name': 'azure', 'highlight': true},
  {'name': 'apidev', 'highlight': true},
  {'name': 'automation', 'highlight': false},
  {'name': 'docker', 'highlight': true},
  {'name': 'windows', 'highlight': true},
  {'name': 'linux', 'highlight': true}
];

const links = [
  {'name': 'fantasy.ski', 'highlight': true},
  {'name': 'keydev.us', 'highlight': false},
  {'name': 'floatapp.net', 'highlight': false},
  {'name': 'bfostdev.com', 'highlight': true},
  {'name': 'bfostdev.net', 'highlight': true}
];

const classRepos = [
  {'name': 'algs-ds', 'highlight': true},
  {'name': 'cpp', 'highlight': true},
  {'name': 'comparch', 'highlight': true},
  {'name': 'langs', 'highlight': false},
  {'name': 'func', 'highlight': false},
  {'name': 'os', 'highlight': false}
];

const projRepos = [
  {'name': 'brriann.github.io', 'highlight': true},
  {'name': 'node-rest', 'highlight': false},
  {'name': 'django-rest', 'highlight': false},
  {'name': 'reactredux', 'highlight': true},
  {'name': 'mongo-express', 'highlight': false}
];

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
