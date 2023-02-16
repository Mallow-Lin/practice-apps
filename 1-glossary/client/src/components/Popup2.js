import React from 'react';

const Popup2 = (props) => {
  return (props.popup) ? (
    <div style={{backgroundColor:'rgba(50,50,50,0.9)', display:'block', left:0, top:0, width:'100%', height:'100%', position:'fixed'}}>
      <div style={{backgroundColor:'white', display:'inline-block', width:'30%', height:'30%', top:'35%', left:'35%', position:'relative'}}>
        <div>{props.children}</div>
      </div>
    </div>
  ) : '';
}

export default Popup2;