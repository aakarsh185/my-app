import React,{useState} from 'react'

export default function TextForm(props) {
    const handleupClick=()=>{
        console.log("Uppercase was clicked"+text);
        let newtext=text.toUpperCase();
        setText(newtext);
        props.show("Converted to Uppercase","success");
    }
    const handlelowClick=()=>{
      let lowtext=text.toLowerCase();
      setText(lowtext);
      props.show("Converted to Lowercase","success");
    }
    const copy=()=>{
      let t=document.getElementById("ta");
      t.select();
      navigator.clipboard.writeText(t.value);
      props.show("Text Copied to Clipboard!","success");
    }
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const res=()=>{
      let newtext=text.split(/[ ]+/);
      setText(newtext.join(" "));
      props.show("Extra Spaces Removed","success");
    }
    const ct=()=>{
      let clt="";
      setText(clt);
      props.show("Text is cleared!","success");
    }
    const[text,setText]=useState('Enter text here');
    // setText("Aakarsh");
  return (
    <>
    <div>
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} className="form-control" onChange={handleOnChange} rows="8" id="ta"></textarea>
        <button className="my-2 btn btn-primary" onClick={handleupClick}>Convert To Uppercase</button>
        <button className="mx-2 my-2 btn btn-warning" onClick={handlelowClick}>Convert To Lowercase</button>
        <button className="mx-2 my-2 btn btn-secondary" onClick={copy}>Copy Text</button>
        <button className="mx-2 my-2 btn btn-success" onClick={res}>Remove Extra Spaces</button>
        <button className="mx-2 btn btn-info" onClick={ct}>Clear Text</button>
      </div>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h3>This is my heading</h3>
      <p>no of words in text are {text.split(" ").length} ,no of characters in text are {text.length}</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in textbox above to preview it"}</p>
    </div>
    </>
  )
}
