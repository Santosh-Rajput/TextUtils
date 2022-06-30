import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper case...","success");
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower case...","success");

    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared...","success");

    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied...","success");

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces emoved...","success");

    }

    const [text, setText] = useState(''); 
    return (
        <>
        <div className="container" style={{color: props.mode==='black'?'white':'#042743'}}> 
            <h2>{props.heading}</h2>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='black'?'#8e6bb6':'white', color: props.mode==='black'?'white':'#042743' }} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-outline-primary mx-1 my-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-outline-primary mx-1 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-outline-primary mx-1 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-outline-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-outline-primary mx-1 my2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='black'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}