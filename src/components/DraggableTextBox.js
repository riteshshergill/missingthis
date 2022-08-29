import React from 'react';
import '../styles/DraggableTextBox.css';

function DraggableTextBox(props) {

  return (
    <>
        
        <div style={{backgroundColor:'white', margin:'20px 25%', textAlign:'center', fontSize:'40px'}} className="speech-bubble">
          <textarea  value={props.draggableTextValue} 
            className="speechBubbleInput" onChange={props.handleValueChanged}></textarea>
        </div>
        
      
    </>

  )
}

export default DraggableTextBox