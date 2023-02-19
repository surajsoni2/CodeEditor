import React,{ useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import { Controlled as ControlledEditor } from 'react-codemirror2'


export default function Editor(props){
    const [open, setOpen] = useState(true)
    const {
        language,
        name,
        value,
        onChange
    } = props
    
    function handleChange(editor,data,value){
        onChange(value)
    }

   
  return (
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className="editor-title">
                {name}
                <button
                onClick={()=>setOpen(preOpen => !preOpen)}>
                  {open? '➡⬅' : '⬅➡'}  
                </button>
            </div>
            <ControlledEditor 
                onBeforeChange={handleChange}
                value={value}
                className="code-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true,
                }}
            />
        </div>
  )
}

