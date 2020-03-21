import React, { Component } from "react";

class Createuser extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="userid">User Id</label>
            <input
              type="number"
              className="form-control"
              value={this.props.user.userid}
              name="userid"
              onChange={e => {
                this.props.handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputname">Name</label>
            <input
              type="text"
              className="form-control"
              value={this.props.user.name}
              name="name"
              onChange={e => {
                this.props.handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              value={this.props.user.email}
              name="email"
              onChange={e => {
                this.props.handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              value={this.props.user.password}
              name="password"
              onChange={e => {
                this.props.handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPhone1">Phone</label>
            <input
              type="text"
              className="form-control"
              value={this.props.user.phone}
              name="phone"
              onChange={e => {
                this.props.handleChange(e);
              }}
            />
          </div>

          {!this.props.isEdit && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.props.handleSubmit}
            >
              Submit
            </button>
          )}
          {this.props.isEdit && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                this.props.updateUser();
              }}
            >
              Update
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default Createuser