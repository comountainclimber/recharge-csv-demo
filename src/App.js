import React from "react";
import logo from "./logo.svg";
import "./App.css";
import questionIcon from "./question@2x.png";

import LoadingSpinner from "./LoadingSpinner";

class App extends React.Component {
  state = {
    fileName: "",
    loading: false,
    success: false
  };

  render() {
    return (
      <div className="App">
        {this.state.loading ? (
          <div className="spinner-container">
            {" "}
            <LoadingSpinner />{" "}
          </div>
        ) : this.state.success ? (
          <React.Fragment>
            <h1> Results</h1>
            <div id="success_container">
              <div id="title">Success!</div>
              <p>No errors found! Check your email for further instruction.</p>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h1> Self-serve migration tool</h1>
            <p>
              To migrate your customers into ReCharge, you will need to format
              your exported data into our <a>Migration Template CSV. </a> The
              data needs to be in this format for our system to import it
              correctly. This guide provides an overview of the headings within
              the template and the information required to prepare the file.
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
              <p onClick={this.handleClick}>
                <input
                  id="hidden_file_input"
                  type="file"
                  style={{ visibility: "hidden" }}
                  onChange={this.handleFileUploadEvent}
                />
                {!this.state.fileName ? (
                  <React.Fragment>
                    <a>Add file </a> or upload here:{" "}
                  </React.Fragment>
                ) : (
                  this.state.fileName
                )}
              </p>
            </div>

            <div id="button_container">
              <button
                disabled={!this.state.fileName}
                onClick={this.handleFileUpload}
              >
                <span>Submit </span>
              </button>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }

  handleClick = () => {
    document.getElementById("hidden_file_input").click();
  };

  handleFileUploadEvent = () => {
    var fileInput = document.getElementById("hidden_file_input");
    var fileName = fileInput.files[0].name;
    this.setState({
      fileName
    });
  };

  handleFileUpload = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, success: true });
    }, 5000);
  };
}

export default App;
