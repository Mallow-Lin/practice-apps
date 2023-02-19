import React, { useState } from 'react';

const Search = ({ search }) => {

  const [term, setTerm] = useState('')

  const handleSearch = () => {
    search(term);
    setTerm('');
  }
  return (
    <div>
      <label htmlFor='search'><h4>Search Glossary Here:</h4></label>
      <input type='text' id='search' name='search' value={term} placeholder='Search Here'
             onChange={(e) => {e.preventDefault(); setTerm(e.target.value);}}/>
      <button className='button' onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search;