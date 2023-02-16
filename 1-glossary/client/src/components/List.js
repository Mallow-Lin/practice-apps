import React, { useState } from 'react';
import Popup1 from './Popup1.js'
import Popup2 from './Popup2.js'

const List = ({ glossary, edit, Delete }) => {

  const [popup2, showPopup2] = useState(false);
  const [popup, showPopup] = useState(false);
  const [definition, editDefinition] = useState('');

  const handleUpdate = () => {
    showPopup(false);
    glossary.definition = definition || glossary.definition;
    edit(glossary);
  }

  const handleDelete = () => {
    showPopup2(false);
    Delete(glossary);
  }

  return (
    <div>
      <main>
        <div style={{display: 'flex'}}>
          <button className='button' onClick={() => showPopup(true)}>Edit</button>
          <button className='button deleteButton' onClick={() => showPopup2(true)}>Delete</button>
          <h4>{glossary.word} : </h4><div>{glossary.definition}</div>
        </div>
      </main>

      <Popup1 showPopup={showPopup} popup={popup}>
        <div>
          <div>{glossary.word} : <input defaultValue={glossary.definition} onChange={(e) => editDefinition(e.target.value)} style={{width:"50%", textAlign:'center'}}/></div>
          <button onClick={handleUpdate} style={{margin: 20}}>Save</button>
        </div>
      </Popup1>

      <Popup2 popup={popup2}>
        <div style={{marginBottom:20, color:'red'}}>Want to delete?</div>
        <button onClick={() => showPopup2(false)}>Cancel</button> <button onClick={handleDelete}>Delete</button>
      </Popup2>
    </div>

  )
}

export default List;