import React from "react";
import logo from "./logo.svg";
import "./App.css";
import questionIcon from "./question@2x.png";

function App() {
  return (
    <div className="App">
      <h1> Self-serve migration tool</h1>
      <p>
        To migrate your customers into ReCharge, you will need to format your
        exported data into our <a>Migration Template CSV. </a> The data needs to
        be in this format for our system to import it correctly. This guide
        provides an overview of the headings within the template and the
        information required to prepare the file.
      </p>
      <div id="important_note">
        <img id="question_icon" src={questionIcon} />
        <h2> Important note: </h2>
        <p>
          Please prepare CSV before uploading below by reading this help
          document <a>here.</a>
        </p>
      </div>

      <div id="file_upload">
        <h2> File upload</h2>
        <p onClick={handleClick}>
          <input
            id="hidden_file_input"
            type="file"
            style={{ visibility: "hidden" }}
          />
          <a>Add file </a> or upload here
        </p>
      </div>

      <div id="button_container">
        <button>
          <span>Submit </span>
        </button>
      </div>
    </div>
  );
}

function handleClick() {
  document.getElementById("hidden_file_input").click();
}

export default App;
