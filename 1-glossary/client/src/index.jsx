import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.js';
import List from './components/List.js'
import Add from './components/Add.js'


const App = () => {
  return (
    <div>
      <div>
        <h1>My Glossary</h1>
      </div>
      <div>
        <Add />
      </div>
      <div>
        <Search />
      </div>
      <div>
        <h3>Here are # glossaries</h3>
        <List />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));