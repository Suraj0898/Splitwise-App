import React, { Component } from "react";
import  {Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Axios from "axios";

class Userlist extends Component {
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
      isEdit:false,
      isShow:false
    };
    console.log(this.props);
  }

  componentWillMount(){
    Axios.get("http://localhost:8765/splitwise-user-management/user-db").then(res => {
      this.setState({users:res.data})
      console.log(this.state.users);
      
    })
  }

  editUser = user => {
  this.setState({ user, isEdit: !this.state.isEdit });
  };

  updateUser = () => {
    Axios
      .put("http://localhost:8765/splitwise-user-management/user-db" , this.state.user)
      .then(res => {
        this.getAllUsers();
        this.setState({ isEdit: !this.state.isEdit });
      });
  };

  getAllUsers() {
      Axios.get("http://localhost:8765/splitwise-user-management/user-db").then(res => {
        this.setState({ users: res.data });
      });
    }  
   
  deleteUser = user => {
      console.log(user);
      Axios.delete("http://localhost:8765/splitwise-user-management/user-db/" + user.userid).then(res => {
        this.getAllUsers();
      });
    };


  // showGroups(){
  //   console.log(user);
  //   Axios.get("http://localhost:8765/split-management/group/userid/" + user.userid).then(res =>{
  //     this.setState({isShow=true})
  //   }
  // };

  render() {
    if(this.state.isEdit===true){
      return <Redirect to="/Sign-Up"/>
    }
    // if(this.state.isShow===true){
    //   return <Redirect to="/"
    // }
    return (
      <div className="container">
        <h1>List of Users</h1>
          <table className="table striped bordered hover">
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone</th>
            </tr>
            {this.state.users.map(user=>{
              return <tr key={user}>{Object.values(user).map((val)=>{
              return <td key={val}>{val}</td>})}
                      <td>
                      <button
                        className="btn btn-warning"
                        onClick={() => {
                          this.editUser(user);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          this.deleteUser(user);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                
              </tr>

            })}
          </table>
      </div> 
    )
}
}
export default Userlist
