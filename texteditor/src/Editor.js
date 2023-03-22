import React, { useState, useEffect } from "react";

import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";

function Editor() {
  const [text, setText] = useState("");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [selectedText, setSelectedText] = useState("");
  
  const getSelectedText = () => {
    if (document.getSelection) {
      var lol = document.getSelection();
      alert(lol);
    }
  };
  const boldClickHandler = () => {
    const editor = document.getElementById("editor");
    if (bold == true) {
      editor.style.fontWeight = "300";
      setBold(false);
    } else {
      editor.style.fontWeight = "bold";
      setBold(true);
    }
  };

  const italicClickHandler = () => {
    const editor = document.getElementById("editor");
    if (italic === true) {
      editor.style.fontStyle = "normal";
      setItalic(false);
    } else {
      editor.style.fontStyle = "italic";
      setItalic(true);
    }
  };

  return (
    <main>
      <button type="button" onClick={boldClickHandler}>
        <i class="fa-solid fa-bold"></i>
      </button>
      <button type="button" onClick={italicClickHandler}>
        <i class="fa-solid fa-italic"></i>
      </button>
      <button onClick={getSelectedText}>lol</button>
      <div contentEditable="true" className="editor--div" id="editor">
        lolalalldsasijdfojn
      </div>
    </main>
  );
}

export default Editor;
