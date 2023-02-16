import React from 'react';

const Popup1 = (props) => {
  return (props.popup) ? (
    <div style={{backgroundColor:'rgba(50,50,50,0.9)', display:'block', left:0, top:0, width:'100%', height:'100%', position:'fixed'}}>
      <div style={{backgroundColor:'white', display:'inline-block', width:'30%', height:'30%', top:'35%', left:'35%', position:'relative'}}>
        <button onClick={()=> props.showPopup(false)} style={{marginLeft:'96%'}}>X</button>
        <div style={{textAlign: 'center', marginTop:'15%'}}>{props.children}</div>
      </div>
    </div>
  ) : '';
}

export default Popup1;