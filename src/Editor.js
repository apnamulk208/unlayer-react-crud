import React, { useState, useRef } from 'react';
import { Bar, ActionButton, uid } from './styled.components';
import EmailEditor from 'react-email-editor';

export default function (props) {

  const { templateData, edit, history: {goBack}} = props;
  let [input, setInput] = useState(edit ? templateData.name : '')
  let editor = useRef();

  function onLoad(ed) {

    if (edit) {
      if (editor && editor.loadDesign) {
        editor.loadDesign(templateData.template)
      } else if (window.unlayer) window.unlayer.loadDesign(templateData.template)

     
    } else {
      if (editor && editor.loadBlank) {
        editor.loadBlank();
      } else if (window.unlayer) window.unlayer.loadBlank();
    }

  }
  function handleClick() {

    let saveDesign = (editor && editor.saveDesign) || window.unlayer.saveDesign;
   
    saveDesign(design => {
      // debugger;
      let payload = {
        id : edit ? templateData.id: uid(),
        template : design,
        name: input
      }
      fetch(`http://localhost:3001/templates${edit? '/'+ templateData.id: '' }`, {
        method: edit ? 'PUT': 'POST', 
        body: JSON.stringify(payload), 
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())              
      .then(response => {
        console.log('Success:', JSON.stringify(response))
        !edit && goBack();
        
      })
      .catch(error => console.error('Error:', error));
    })
    
  }
  function onDesignLoad(data) {

    console.log('onDesignLoad', data)

  }

  return (
    <>
      <Bar>
        <h1>{edit ? templateData.name : 'Templates'}</h1>
        <ActionButton onClick={handleClick} >Save</ActionButton>
        <input onChange={(evt)=>{

          setInput(evt.currentTarget.value)
        }}  type="text" value={input} />
      </Bar>

      <EmailEditor
        ref={designer => editor = designer}
        onLoad={onLoad}
        onDesignLoad={onDesignLoad}
      />

    </>
  );
}