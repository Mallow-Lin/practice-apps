import React, { useState } from 'react';
import Popup1 from './Popup1.js'

const List = ({ glossary, edit, Delete }) => {

  const [popup, showPopup] = useState(false);
  const [definition, editDefinition] = useState('');

  const handleUpdate = () => {
    showPopup(false);
    glossary.definition = definition;
    edit(glossary);
  }


  return (
    <div>
      <main>
        <div>{glossary.word} : {glossary.definition}
          <button onClick={() => showPopup(true)}>Edit</button>
          <button>Delete</button>
        </div>
      </main>

      <Popup1 showPopup={showPopup} popup={popup}>
        <div>Word: {glossary.word}</div>
        <div>Definition: <input defaultValue={glossary.definition} onChange={(e) => editDefinition(e.target.value)}/></div>
        <button onClick={handleUpdate}>Save</button>
      </Popup1>
    </div>

  )
}

export default List;