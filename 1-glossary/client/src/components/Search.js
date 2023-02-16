import React, { useState } from 'react';

const Search = ({ search }) => {

  const [term, setTerm] = useState('')

  const handleSearch = () => {
    search(term);
  }
  return (
    <div>Search Glossary Here:
      <input placeholder='Search Here' onChange={(e) => setTerm(e.target.value)}/>
      <button className='button' onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search;