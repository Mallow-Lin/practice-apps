import React, { useState } from 'react';
import Popup1 from './Popup1.js'
import Popup2 from './Popup2.js'

const List = ({ glossary, edit, Delete }) => {

  const [popup2, showPopup2] = useState(false);
  const [popup, showPopup] = useState(false);
  const [definition, editDefinition] = useState('');

  const handleUpdate = () => {
    showPopup(false);
    glossary.definition = definition;
    edit(glossary);
  }

  const handleDelete = () => {
    showPopup2(false);
    Delete(glossary);
  }

  return (
    <div>
      <main>
        <div>{glossary.word} : {glossary.definition}
          <button onClick={() => showPopup(true)}>Edit</button>
          <button onClick={() => showPopup2(true)}>Delete</button>
        </div>
      </main>

      <Popup1 showPopup={showPopup} popup={popup}>
        <div>Word: {glossary.word}</div>
        <div>Definition: <input defaultValue={glossary.definition} onChange={(e) => editDefinition(e.target.value)}/></div>
        <button onClick={handleUpdate}>Save</button>
      </Popup1>

      <Popup2 popup={popup2}>
        <div>Want to delete?</div>
        <button onClick={() => showPopup2(false)}>Cancel</button> <button onClick={handleDelete}>Delete</button>
      </Popup2>
    </div>

  )
}

export default List;