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
    axios({
      method: 'GET',
      url: '/Search',
      params: {term}
    })
    .then((response) => {
      setSearched(response.data);
    })
    .catch((err) => {
      return alert("Sorry, we cannot find this word, please try again");
    })
  }

  const add = (word, definition) => {
    axios({
      method: 'POST',
      url: '/Add',
      params: {word, definition}
    })
    .then((response) => {
      setGlossaries(response.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const edit = (glossary) => {
    axios({
      method: 'POST',
      url: 'edit',
      params: {glossary}
    })
    .then((response) => {
      setGlossaries(response.data)
    })
  }

  const Delete = (glossary) => {
    console.log('delete')
    axios({
      methpd: 'POST',
      url: '/delete',
      params: {glossary}
    })
  }

  return (
    <div>
      <div>
        <h1>My Glossary</h1>
      </div>
      <div>
        <Add add={add}/>
        <Search search={search}/>
        <div className='searched'> {searched.word} : {searched.definition}</div>
        <div></div>
      </div>
      <div>
        <h3>Here are {glossaries.length} glossaries</h3>
        {glossaries.map((glossary) => (
          <List glossary={glossary} edit={edit} Delete={Delete}/>
        ))}
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));