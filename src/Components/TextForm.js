import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("Upper Case Clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To UPPERCase","success");
    }
    const handleOnChange =(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const handleUpLower =()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To LowerCase","success");
    }
    const handleClear =()=>{
        setText("");
        props.showAlert("Text Cleared","success");
    }
    const handleReplace=()=>{
        let prev = prompt("Enter Word To Be Replaced: ");
        let replace = new RegExp(prev,'g');
        let after = prompt("Enter Replacement Text: ");

        let newText=text.replace(replace,after);
        setText(newText);
    }

    // const [text, setText] = useState('Enter Text Here');
    const [text, setText] = useState('');
    return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" placeholder='Type Here' value={text} onChange={handleOnChange} style={{ backgroundColor:props.mode==='dark'?'#413F42':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="7"></textarea>
        </div>
        <button className="btn btn-primary mx-2 " onClick={handleUpClick}>Convert To UPPERCase</button>
        <button className="btn btn-primary mx-2" onClick={handleUpLower}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleReplace}>Replace Text</button>
        <button className="btn btn-outline-danger mx-2" onClick={handleClear}>Clear Text</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Text Summary</h3>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <h3>Text Preview</h3>
        <p>{text.length>0?text:'Enter Text Above To Preview Here'}</p>
    </div>
</>
  )
}


