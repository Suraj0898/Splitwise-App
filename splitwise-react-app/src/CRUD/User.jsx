import React, { Component } from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class User extends Component {
 
    constructor(props) {
        super(props);
    
        this.state = {
            user: {
                userid: "",
                name: "",
                email: "",
                phone: ""
        },
          userIdT:"",
          users: [],
          isClick:false
        };
        console.log(this.props);
      }

      groupClick=()=>{
        this.setState({isClick:true})
      }

      componentWillMount(){
        /* Axios.get("http://localhost:8765/split-management/db/users").then(res => {
          this.setState({users:res.data})
          console.log(this.state.users);
          
        }) */

        let userIdT = this.state.userIdT;
        this.setState({userIdT:JSON.parse(sessionStorage.getItem('userid'))})
        Axios.get("http://localhost:8765/splitwise-user-management/user-db/"+this.state.userIdT).then(res => {
            /* this.setState({ user: res.data }); */
            console.log(res)
          })
      } 
    
    getUserDetails=()=>{
        let userIdT = this.state.userIdT;
        this.setState({userIdT:JSON.parse(sessionStorage.getItem('userid'))})
        Axios.get("http://localhost:8765/splitwise-user-management/user-db/"+this.state.userIdT).then(res => {
            this.setState({ user: res.data });
            console.log(this.state.users);
        });
    }

    
    render() {

      return (
        <div>
        {this.state.isClick ? (
          <Redirect
            to={{
              pathname: "/group",
              state: { id: this.state.user.userid }
            }}
          />
        ) : (
          <div>
            <div>
                <h2>Welcome {this.state.user.name}</h2>
                <button className="btn btn-primary" onClick={this.getUserDetails} >Load Your Information</button>
            </div>
            <br></br>
            <div className="container-fluid">
                <table className="table">
                    <thead>
                <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Email Id</th>
              <th>Phone Number</th>
              <th></th>
              
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>{this.state.user.userid}</th>
                <th>{this.state.user.name}</th>
                <th>{this.state.user.email}</th>
                <th>{this.state.user.phone}</th>
                <th><button className="btn btn-primary" onClick={this.groupClick}>Groups</button></th>
            </tr>
            </tbody>
          </table>

            </div>
            </div>    
            )}
            </div>
          );
        }
      }
