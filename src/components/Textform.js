import React, { useState } from "react";

export default function Textform(props) {
  const handleUpclick = () => {
    let newtext = text.toUpperCase();

    setText(newtext);
    props.showAlert(" Converted into Uppercase", "success");
  };
  const handlelowclick = () => {
    let newtext = text.toLowerCase();
    props.showAlert(" Converted into lowercase", "success");

    setText(newtext);
  };
  const handleclearclick = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert(" Your text was clear", "success");
  };
  const handleCopyclick = () => {
    let text = document.getElementById("My-Box");
    text.select();
    props.showAlert(" Your text is coppied", "success");

    navigator.clipboard.writeText(text.value);
  };

  const handelExtrascpces = () => {
    let newtext = text.split(/[  ]+/);
    setText(newtext.join(" "));
    props.showAlert(" Your text extraSpces is removed", "success");
  };

  const handleonChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("  ");
  // setText("New Text");// correct way to change the state
  return (
    <>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#6e6868b3" : "white",
              color: props.mode === "dark" ? "white" : "black",
              border:'2px solid black'
            }}
            id="My-Box"
            rows="9"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1 " onClick={handleUpclick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-danger mx-2 my-1 " onClick={handlelowclick}>
          Convert To Lowercase
        </button>
        <button
          className="btn btn-primary mx-2 my-1 "
          onClick={handleclearclick}
        >
          {" "}
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-2 my-1 "
          onClick={handleCopyclick}
        >
          {" "}
          Copy Text
        </button>

        <button
          className="btn btn-danger mx-2 my-1 "
          onClick={handelExtrascpces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p> 
          {" "}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        {/*text.split(" ") it gives array and .lenth count the array..*/}
        <p>{0.008 * text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something in the above textBox to preview it here...."}
        </p>
      </div>
    </>
  );
}
