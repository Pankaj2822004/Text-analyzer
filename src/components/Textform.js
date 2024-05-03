import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
// import translate from 'google-translate-api';
import Typed from "typed.js";
<link rel="stylesheet" href="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js" />
export default function Textform(props) {
  useEffect(() => {
    // Initialize the Typed instance
    const typedElement = document.getElementById("Element");
    if (typedElement) {
      const typed = new Typed(typedElement, {
        strings: ["Convert to upperCase", "Convert to LowerCase", "ClearText" , "CopyText" , "Remove Extra spaces" , "Reverse text" , "Count Character" , "insertText"],
        typeSpeed: 50,
        loop: true,
      });
  
      // Clean up Typed instance on component unmount
      return () => {
        typed.destroy();
      };
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount
  
  const [text, setText] = useState("");
   const handleUpClick = () => {
    console.log("uppercase log clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleDownClick = () => {
    console.log("Lowercase log clicked" + text);
    let newText = text.toLocaleLowerCase();
    // let newText=text.tri
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text will be cleared");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied To Clipboard");
  };

  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ] + /);
    setText(newtext.join(" "));
  };
  const handleReverseText = () => {
    let reversedText = text.split("").reverse().join("");
    setText(reversedText);
  };
  const handleCountCharacter = () => {
    const charToCount = prompt("Enter a character to count:");
    if (charToCount) {
      const count = text.split(charToCount).length - 1;
      props.showAlert(`The character '${charToCount}' appears ${count} times.`);
    }
  };
  const handleInsertText = () => {
    const newTextToInsert = "hello";
    const textarea = document.getElementById("mybox");
    if (textarea) {
      const { selectionStart, selectionEnd } = textarea;
      const currentText = text || "";
      const newText =
        currentText.substring(0, selectionStart) +
        newTextToInsert +
        currentText.substring(selectionEnd);
      setText(newText);
    }
  };

   //  hooks state

  return (
    <div>
      <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
        MY WEBS -<span id="Element"></span>
      </h2>
      <div className="my-2">
        <textarea
          className="form-control"
          style={{
            backgroundColor: props.mode === "dark" ? "#9f8b8b" : "pink",
          }}
          id="mybox"
          value={text}
          onChange={handleOnChange}
          cols="90"
          rows="6"
        ></textarea>
      </div>
      <button
        disabled={text.length === 0}
        className="btnbtnprimary mx-1 my-1"
        onClick={handleUpClick}
      >
        Convert to Uppercase
      </button>
      <button
        disabled={text.length === 0}
        className="btnbtnprimary mx-1 my-1"
        onClick={handleDownClick}
      >
        Convert to Lowercase
      </button>
      <button
        disabled={text.length === 0}
        className="btnbtnprimary mx-1 my-1"
        onClick={handleClearClick}
      >
        Clear text
      </button>
      <button
        disabled={text.length === 0}
        className="btnbtnprimary mx-1 my-1"
        onClick={handleCopy}
      >
        Copy text
      </button>
      <button
        disabled={text.length === 0}
        className="btnbtnprimary mx-1 my-1"
        onClick={handleExtraSpaces}
      >
        Remove Extra Spaces
      </button>
      <button
        disabled={text.length === 0}
        className="btnbtnprimary mx-1 my-1"
        onClick={handleReverseText}
      >
        Reverse Text
      </button>
      <button
        disabled={text.length === 0}
        className="btnbtnprimary mx-1 my-1"
        onClick={handleCountCharacter}
      >
        Count Character
      </button>
      <button
        disabled={text.length === 0}
        className="btnbtnprimary mx-1 my-1"
        onClick={handleInsertText}
      >
        Insert Text
      </button>
     
      
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>You text Summary</h3>
        <p>
          {" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words {text.length} characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>
          {" "}
          {text.length > 0
            ? text
            : " Enter something in the textarea to preview it"}{" "}
        </p>
      </div>
    </div>
   
  );
}
