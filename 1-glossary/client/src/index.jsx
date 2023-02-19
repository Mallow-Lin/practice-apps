import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
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

  const add = (glossary) => {
    axios({
      method: 'POST',
      url: '/Add',
      params: glossary
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
      params: glossary
    })
    .then((response) => {
      setGlossaries(response.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const Delete = (glossary) => {
    axios({
      method: 'POST',
      url: '/delete',
      params: glossary
    })
    .then((response) => {
      setGlossaries(response.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div>
      <div>
        <h1>My Glossary</h1>
      </div>
      <div style={{marginTop:20}}>
        <Add add={add}/>
      </div>
      <div style={{backgroundColor:'lightgray', marginTop:20, marginBottom: 20, height: 80}}>
        <Search search={search}/>
        <h4> {searched.word} : {searched.definition}</h4>
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