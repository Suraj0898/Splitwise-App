import React, { Component } from "react";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        userName: "",
        email: "",
        password: ""
      },
      users: []
    };
  }

  handleChange = e => {
    let user = this.state.user;
    user[e.target.name] = e.target.value;
    this.setState({ user });
  };

  handleSubmit = () => {
    let user = Object.assign({}, this.state.user);
    let users = this.state.users;
    users.push(user);
    this.setState({ users }, () => {
      console.log(this.state.users);
    });
    this.clearForm();
  };

  clearForm = () => {
    let user = {
      userName: "",
      email: "",
      password: ""
    };
    this.setState({ user }, () => {
      console.log(this.state.user);
    });
  };

  getUser = () => {
    console.log(this.state.user);
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>User Register</h4>

              <form>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.user.userName}
                    name="userName"
                    onChange={e => {
                      this.handleChange(e);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    value={this.state.user.email}
                    name="email"
                    onChange={e => {
                      this.handleChange(e);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={this.state.user.password}
                    name="password"
                    onChange={e => {
                      this.handleChange(e);
                    }}
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="col-md-8">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Password</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map(user => {
                    return (
                      <tr>
                        {Object.values(user).map(val => {
                          return <td>{val}</td>;
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
