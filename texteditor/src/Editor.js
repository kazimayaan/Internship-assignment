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
  const handleBold = () => {
    document.execCommand("bold", false, null);
  };

  const handleItalic = () => {
    document.execCommand("italic", false, null);
  };

  return (
    <main>
      <div className="buttons">
        <button type="button" onClick={handleBold}>
          <i class="fa-solid fa-bold"></i>
        </button>
        <button type="button" onClick={handleItalic}>
          <i class="fa-solid fa-italic"></i>
        </button>
        <button onClick={getSelectedText}>AlertSelectedText</button>
      </div>
      <div contentEditable="true" className="editor--div" id="editor">
        Your Text Here.
      </div>
    </main>
  );
}

export default Editor;
