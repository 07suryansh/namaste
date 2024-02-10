import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        setText(text.toUpperCase());

    }
    const handleLoClick=()=>{
        setText(text.toLowerCase());

    }
    
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const [text,setText]=useState("Enter your text here");
    
    
    return (
        <div className='container' style={{backgroundColor:props.mode==='dark'?'grey':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">

            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>

        </div>
    )
}
