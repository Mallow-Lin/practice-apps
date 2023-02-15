import React from "react";

const Add = () => {
  return (
    <div>Add New Glossary Here:
      <input placeholder='word' onChange={(e) => e.target.placeholder=''}/>
      <input placeholder='definition' onChange={(e) => e.target.placeholder=''}/>
      <button>Add</button>
    </div>
  )
}

export default Add;