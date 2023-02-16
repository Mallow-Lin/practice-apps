import React, { useState } from "react";

const Add = ({ add }) => {

  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  const handleAdd = () => {
    document.querySelector('.errorMessage').innerHTML='';
    if (word && definition) {
      add(word, definition);
    } else {
      document.querySelector('.errorMessage').innerHTML='**Please enter a valid word and definition**'
    }
  }
  return (
    <div>Add New Glossary Here:
      <input id='word' placeholder='word' onChange={(e) => setWord(e.target.value)} onBlur={(e) => e.target.placeholder='word'}/>
      <input id='definition' placeholder='definition' onChange={(e) => setDefinition(e.target.value)}/>
      <button className='button'  onClick={handleAdd}>Add</button>
      <div className="errorMessage"></div>
    </div>
  )
}

export default Add;