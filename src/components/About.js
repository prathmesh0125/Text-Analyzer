import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setmyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // }); 

  let myStyle={
    color:props.mode=== 'dark'?'white':'black',
    backgroundColor:props.mode === 'dark'?'black':'white'
  }

  
  return (
    <div className="container my-2" style={{color:props.mode=== 'dark'?'white':'black'}}>
      <h2 className="my-4">About Us</h2> 
      <div className=" accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyze Your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Text-Analyzer gives you a way to analyze your text quickly and efficently.be it word count,character count.
      
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Text-Analyzer is a free character counter tool that provides instant character count & word count & word count staistic for a given text. Text-Analyzer reports the number of words and character .thus it is suitable for writing text with word/character limit. 

            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser Comoatiable
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            style={myStyle}
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            This Word counter softwear works in any web Browser such as chrome ,firefox ,internet Expolar ,safari ,opera.It suits to count Charaters in facebook ,blig,books ,excel document,pdf document,essays,etc.
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}
