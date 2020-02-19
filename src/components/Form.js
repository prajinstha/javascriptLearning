import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div className="card w-50 mx-auto my-5">
        <div className="card-header">
          <h3>Form</h3>
        </div>
        <form>
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter your email"
              name="name"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary btn-sm" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
