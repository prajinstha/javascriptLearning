import React from "react";
import Form from "./components/Form";
import Display from "./components/Display";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Form />

        <Display />
      </div>
    );
  }
}

export default App;
