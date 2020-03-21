import React, { Component } from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class GroupbyId extends Component {
 
    constructor(props) {
        super(props);
    
        this.state = {
            group: {
                groupId: "",
                groupname: "",
                activity: "",
                grouplink: "",
                members: []
        },
          userIdT:"",
          groupIdT:"",
          groups: [],
          isClick:false,
          isStatus:false
        };
        console.log(this.props);
      }

      expenseClick=()=>{
        this.setState({isClick:true})
      }

      componentWillMount(){
        /* Axios.get("http://localhost:8765/split-management/db/users").then(res => {
          this.setState({users:res.data})
          console.log(this.state.users);
          
        }) */

        let userIdT = this.state.userIdT;
        this.setState({userIdT:JSON.parse(sessionStorage.getItem('userid'))})
        Axios.get("http://localhost:8765/splitwise-group-management/group/userid/" +this.state.userIdT).then(res => {
            /* this.setState({ user: res.data }); */
            console.log(res)
          })
      } 

      displayStatus = (event) =>{
        const nodelist = event.target.parentNode.parentNode.childNodes
        localStorage.setItem("groupeid",nodelist[0].textContent)

        console.log(localStorage.getItem("groupeid"))
        this.setState({isStatus:true})
      }
    
    getGroupDetails=()=>{
        let userIdT = this.state.userIdT;
        this.setState({userIdT:JSON.parse(sessionStorage.getItem('userid'))})
        Axios.get("http://localhost:8765/splitwise-group-management/group/userid/"+this.state.userIdT).then(res => {
          this.setState({ groups : res.data });
          console.log(this.state.groups);
        });
    }

    
    render() {
      if(this.state.isStatus===true){
        return <Redirect to="/expense"/>
      }
      return (
        // <div>
        // {this.state.isClick ? (
        //   <Redirect
        //     to={{
        //       pathname: "/expense",
        //       state: { id: this.state.group.groupId}
        //     }}
        //   />
        // ) : (
          <div>
            <div>
                <h2>Groups you are associated with : </h2>
                <button className="btn btn-primary" onClick={this.getGroupDetails} >Get Group Information</button>
            </div>
            <br></br>
            <div className="container-fluid">
                <table className="table">
                <thead>
                <tr>
                <th>Group Id</th>
                <th>Group Name</th>
                <th>Activity</th>
                <th>Link</th>
                <th>Members</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {this.state.groups.map(group=>{
              return <tr key={group}>{Object.values(group).map((val)=>{
              return <td key={val}>{val}</td>})}
                <th><button className="btn btn-primary" onClick={this.displayStatus}>Expenses</button></th>
            </tr>
            })}
            </tbody>
          </table>

            </div>
            </div>    
            )}
        }
