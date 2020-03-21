import React, { Component } from "react";
import Axios from "axios";
import md5 from 'md5'
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        userid: "",
        password: ""
      },
      redirect: false,
      isSignUp:false
    };
  }

  forceUpdate() {
    console.log("called force update... ");
  }

  enterSignUp = () =>{
    this.setState({isSignUp:true})
  }

  submitLogin = () => {
    // console.log(e);
    let user = this.state.user;
    //user['password']=md5(this.state.user.password)
    // console.log(md5(this.state.user.password));
    // let user
    this.setState({user})
    console.log(this.state.user);
    
    Axios.post(
      "http://localhost:8765/splitwise-user-management/user-db/loginValidate",
      this.state.user
    )
      .then(res => {
        console.log(res.data);
        if (res.status === 200) {
          // alert("login successful!!");
          console.log("successful!");
          sessionStorage.setItem('userid',JSON.stringify(this.state.user.userid));
          let redirect = true;
          this.setState({ redirect });
          console.log(this.state.redirect);

          return <div> Please Login </div>;
        }
      })
      .catch(err => {
        alert("wrong credentials");
      });
  };

  isAuthenticated = () => {
    return this.state.redirect;
  };

  handleChange = e => {
    let user = this.state.user;
    user[e.target.name] = e.target.value;
    this.setState({ user });
  };

  render() {
    if(this.state.isSignUp===true){
      this.setState({isSignUp:false})
      return <Redirect to="/Sign-Up"/>
    }
    const isAlreadyAuthenticated = this.isAuthenticated();

    return (
      <div>
        {isAlreadyAuthenticated ? (
          <Redirect
            to={{
              pathname: "/user",
              state: { id: this.state.user.userid }
            }}
          />
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h1>Login</h1>
                <form>
                  <div className="form-group">
                    <label htmlFor="userid">User Id</label>
                    <input
                      type="number"
                      className="form-control"
                      value={this.state.user.userid}
                      name="userid"
                      onChange={e => {
                        this.handleChange(e);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
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
                  <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.submitLogin}
                  >
                    Login
                  </button>
                  </td>
                  <br/>
                  <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick= {
                      this.enterSignUp
                    }
                  >
                    Not a User ? Sign Up
                  </button>
                  </td>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}