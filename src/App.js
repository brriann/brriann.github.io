import React from 'react';
import './App.css';

import FlexRowButton from './components/parent/FlexRowButton.js'
import './components/parent/FlexRowButton.css'

import {
  core,
  work,
  interest,
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

function App() {
  return (
    <div className="ezApp">
      <div className="ezAppContainer">
        <header className="ezAppHeader">
          <p>cs</p>
          <p>
            <FlexRowButton
              children={core.map(repoBuilder)}
            />
          </p>
          <p>work</p>
          <p>
            <FlexRowButton
              children={work.map(repoBuilder)}
            />
          </p>
          <p>interest</p>
          <p>
            <FlexRowButton
              children={interest.map(repoBuilder)}
            />
          </p>
        </header>
      </div>
    </div>
  );
}

export default App;
