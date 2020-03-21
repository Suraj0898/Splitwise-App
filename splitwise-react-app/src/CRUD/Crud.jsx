import React, { Component } from "react";
import Createuser from "./Createuser";
import {Redirect} from 'react-router-dom';
import axios from "axios";

class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        userid: "",
        name: "",
        email: "",
        password: "",
        phone: ""
      },
      users: [],
      isSubmit:false
    };
  }
  handleChange = e => {
    let user = this.state.user;
    user[e.target.name] = e.target.value;
    this.setState({ user });
  };
  updateUser = () => {
    axios
      .put("http://localhost:8765/splitwise-user-management/user-db" , this.state.user)
      .then(res => {
        this.getAllUsers();
        this.setState({ isEdit: !this.state.isEdit });
      });
  };
  handleSubmit = () => {
    let user = Object.assign({}, this.state.user);
    axios.post("http://localhost:8765/splitwise-user-management/user-db/", user).then(res => {
      this.getAllUsers();
    });
    this.clearForm();
    this.setState({isSubmit:true})
  };
  clearForm = () => {
    let user = {
      userid: "",
      name: "",
      email: "",
      password: "",
      phone: ""
    };
    this.setState({ user });
  };
  getUsers = users => {
    this.setState({ users });
  };

  // deleteUser = user => {
  //   console.log(user);
  //   axios.delete("http://localhost:8765/split-management/user-db/" + user.userid).then(res => {
  //     this.getAllUsers();
  //   });
  // };

  // editUser = user => {
  // this.setState({ user, isEdit: !this.state.isEdit });
  // };
  getAllUsers() {
    axios.get("http://localhost:8765/splitwise-user-management/user-db").then(res => {
      this.setState({ users: res.data });
    });
  }
  componentDidMount() {
    this.getAllUsers();
  }
  render() {
    if(this.state.isSubmit===true){
      return <Redirect to='/'></Redirect>
    }
    return (
      <div>
        <div className="container">
          <h1>Splitwise Sign Up : </h1>

          <div className="row">
            <div className="col-md-6">
              <Createuser
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                getUsers={this.getUsers}
                user={this.state.user}
                updateUser={this.updateUser}
                isEdit={this.state.isEdit}
              />
            </div>
            {/* <div className="col-md-8">
              <Userlist
                users={this.state.users}
                deleteUser={this.deleteUser}
                editUser={this.editUser}
              />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Crud