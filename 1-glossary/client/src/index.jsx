import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import Search from './components/Search.js';
import List from './components/List.js'
import Add from './components/Add.js'


const App = () => {

  const [glossaries, setGlossaries] = useState([]);
  const [searched, setSearched] = useState({});
  console.log('searched', searched)

  useEffect(() => {
    let isMounted = true;
    axios.get('/fetch')
    .then((response) => {
      if(isMounted) {
        setGlossaries(response.data);
      }})
    return () => isMounted = false;
  }, [])

  const search = (term) => {
    setSearched('');
    $.ajax({
      type: 'GET',
      url: '/Search',
      data: {term},
      success: (data) => {
        setSearched(data);
      },
      error: (err) => {
        return alert("**Sorry, we cannot find this word, please try again**");
      }
    })
  }

  return (
    <div>
      <div>
        <h1>My Glossary</h1>
      </div>
      <div>
        <Add />
        <Search search={search}/>
        <div className='searched'> {searched.word} : {searched.definition}</div>
        <div></div>
      </div>
      <div>
        <h3>Here are {glossaries.length} glossaries</h3>
        {glossaries.map((glossary) => (
          <List glossary={glossary}/>
        ))}
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));