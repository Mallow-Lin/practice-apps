import React, { useState } from "react";

const Add = ({ add }) => {

  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  const handleAdd = () => {
    add(word, definition);
  }
  return (
    <div>Add New Glossary Here:
      <input placeholder='word' onChange={(e) => setWord(e.target.value)}/>
      <input placeholder='definition' onChange={(e) => setDefinition(e.target.value)}/>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Add;