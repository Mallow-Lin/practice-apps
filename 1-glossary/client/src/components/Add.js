import React, { useState } from "react";

const Add = ({ add }) => {

  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAdd = () => {
    if (word && definition) {
      add({word, definition});
      setWord('');
      setDefinition('');
      setErrorMessage('');
    } else {
      setErrorMessage('**Please enter a valid word and definition**');
    }
  }

  return (
    <div>
      <h4>Add New Glossary Here:</h4>
      <label htmlFor='word'>Word: </label>
      <input type='text' id='word' name='word' value={word}
             placeholder='word'
             onChange={(e) => {e.preventDefault(); setWord(e.target.value)}} />
      <label htmlFor='definition'>Definition: </label>
      <input type='text' id='definition' name='definition' value={definition}
             placeholder='definition'
             onChange={(e) => {e.preventDefault(); setDefinition(e.target.value)}} />
      <button className='button'  onClick={handleAdd}>Add</button>
      <div style={{color:'red'}}>{errorMessage}</div>
    </div>
  )
}

export default Add;